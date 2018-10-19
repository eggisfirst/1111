import React, { Component } from 'react'
import Variable from '../variable'
import axios from 'axios'
import { connect } from 'react-redux'
import { changeAwards } from '../actions'
import '../sass/components/awardList.scss'

import bannerImg from '../images/top.jpg'

class awardList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5],
      awards: [],
    }

    // 更新抽奖列表界面
    this.updateAwards = (res) => {
      this.setState({awards: [...res.ticket, ...res.bedding1, ...res.bedding2, ...res.bring_up1, ...res.bring_up2,...res.bring_up3,...res.help_sleep1,...res.help_sleep2]})      
    }

    // 获取抽奖客户列表
    this.getAwards = () => {
      let _this = this
      axios.get(`${Variable.path}getPrizes`, {
        params: {
          date: '2018-10-16',
          type:'1111'
        }
      })
      .then(function (res) {
        console.log('succesee',res.data.data.ticket,res.data.data.bedding2)
        if (res.data) {
          _this.props.changeTotalAmount(res.data.totalAmount)
          if (res.data.data) {
            res = res.data.data
            _this.props.changeAwards([...res.ticket, ...res.bedding1, ...res.bedding2, ...res.bring_up1, ...res.bring_up2,...res.bring_up3,...res.help_sleep1,...res.help_sleep2])    
            console.log(21122)
          }
        }
        // _this.updateAwards(res)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
  
  componentWillReceiveProps(nextProps){
    if(this.props != nextProps) {
      this.setState({awards: nextProps.awards})
    }
  }

	componentDidMount () {
    this.props.changeAwards([1, 2, 3, 4, 5, 6, 7, 8])
    // this.props.changeTotalAmount(1000)
    this.getAwards('2018-10-16')
    console.log(1112222, this.props.status)
	}

  render () {
    const styleComponent = {
      show: {
        display: this.props.status ? 'block' : 'none'
      }
    }
    const awards = this.state.awards.map((item, i) => 
      <li key={i}>
        <span>{
          item.username ? Variable.replaceName(item.username) : ''
        }</span>
        <span>{
          item.username ? Variable.replacePhone(item.phone) : ''
        }</span>
        <span>{
          (() => {
            let type
            switch(item.type){
              case 'ticket':
                type = '旅游奖'
                break;
              case 'bedding1':
                type = '床品奖'
                break;
              case 'bedding2':
                type = '床品奖'
                break;
              case 'bring_up1':
                type = '育儿奖'
                break;
              case 'bring_up2':
                type = '育儿奖'
                break;
              case 'bring_up3':
                type = '育儿奖'
                break;
              case 'help_sleep1':
                type = '助眠奖'
                break;
              case 'help_sleep2':
                type = '助眠奖'
                break;
            default:
              return ''
            }
            return type
          })()
        }</span>
        <span>{
          (() => {
            let type
            switch(item.type){
              case 'ticket':
                type = '澳洲新西兰之旅'
                break;
              case 'bedding1':
                type = '家纺芯逸桑蚕丝夏被'
                break;
              case 'bedding2':
                type = '凯奇床品四件套'
                break;
              case 'bring_up1':
                type = '眼精灵按摩眼罩'
                break;
              case 'bring_up2':
                type = '情侣枕'
                break;
              case 'bring_up3':
                type = '情侣枕'
                break;
              case 'help_sleep1':
                type = '情侣枕'
                break;
              case 'help_sleep2':
                type = '情侣枕'
                break;
            default:
              return ''
            }
            return type
          })()
        }</span>
      </li>
    )
    return (
      <div
      className={`awardList ${this.props.status ? 'enter' : 'leave'}`}
      style={styleComponent.show}>
				<ul className="awardList">
          <li>
            <span>姓名</span>
            <span>手机号</span>
            <span>奖项</span>
            <span>奖品</span>
          </li>
          {awards}
        </ul>
			</div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  awards: state.awards
})

const mapDispatchToProps = dispatch => ({
  changeAwards: (arr) => dispatch(changeAwards(arr))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(awardList)
