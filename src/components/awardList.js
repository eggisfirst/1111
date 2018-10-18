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
      this.setState({awards: [...res.firstPrize, ...res.secondPrize1, ...res.secondPrize2, ...res.thirdPrize1, ...res.thirdPrize2]})      
    }

    // 获取抽奖客户列表
    this.getAwards = (date) => {
      let _this = this
      axios.get(`${Variable.path}`, {
        params: {
          date: date
        }
      })
      .then(function (res) {
        if (res.data) {
          _this.props.changeTotalAmount(res.data.totalAmount)
          if (res.data.data) {
            res = res.data.data
            _this.props.changeAwards([...res.firstPrize, ...res.secondPrize1, ...res.secondPrize2, ...res.thirdPrize1, ...res.thirdPrize2])    
            
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
    this.props.changeAwards([1, 2, 3])
    // this.props.changeTotalAmount(1000)
    this.getAwards('2018-09-09')
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
              case 'firstPrize':
                type = '旅游奖'
                break;
              case 'secondPrize1':
                type = '床品奖'
                break;
              case 'secondPrize2':
                type = '床品奖'
                break;
              case 'thirdPrize1':
                type = '助眠奖'
                break;
              case 'thirdPrize2':
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
              case 'firstPrize':
                type = '澳洲新西兰之旅'
                break;
              case 'secondPrize1':
                type = '家纺芯逸桑蚕丝夏被'
                break;
              case 'secondPrize2':
                type = '凯奇床品四件套'
                break;
              case 'thirdPrize1':
                type = '眼精灵按摩眼罩'
                break;
              case 'thirdPrize2':
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
