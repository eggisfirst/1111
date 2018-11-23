import React, { Component } from 'react'
import Variable from '../variable'
import { connect } from 'react-redux'
import { changeAwards } from '../actions'
import '../sass/components/header.scss'
// 引入reduex
// import { createStore } from 'redux'
// import todoApp from '../reducers'
// import { addTodo } from '../actions'

import bannerImg from '../images/top.jpg'

// let store = createStore(todoApp)

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8]
    }
    
    this.changeAwards = (arr) => {
      this.props.changeAwards(arr)
    }

    this.dateChange1 = () => {
      this.getAwards(this, '2018-11-12')
      
    }
    this.dateChange2 = () => {
      this.getAwards(this, '2018-11-19')
    }
    this.dateChange3 = () => {
      this.getAwards(this, '2018-11-26')
    }
    this.dateChange4 = () => {
      this.getAwards(this, '2018-12-03')
    }

    this.getLine = () => {
      let date = new Date().getDate()
      let mouth = new Date().getMonth()
      console.log('today is',date,mouth)
      let myTimeLine = document.getElementsByClassName('timeLine')
      let myPoint = document.getElementsByTagName('li')
      if(mouth == 9){

      }else{
        if(date > 11 && date < 19){
          console.log(date)
          myTimeLine[0].classList.add('timeLineChangeWidth1')
          myPoint[0].classList.add('changeBgPoint')
        }else if(date > 18 && date < 26 ){
          myTimeLine[0].classList.add('timeLineChangeWidth2')
          myPoint[0].classList.add('changeBgPoint')
          myPoint[1].classList.add('changeBgPoint')
        }else if(date > 25 || (date < 3 && mouth == 11)){
          myTimeLine[0].classList.add('timeLineChangeWidth3')
          myPoint[0].classList.add('changeBgPoint')
          myPoint[1].classList.add('changeBgPoint')
          myPoint[2].classList.add('changeBgPoint')
        }else if(mouth == 11 && date == 3){
          myTimeLine[0].classList.add('timeLineChangeWidth4')
          myPoint[0].classList.add('changeBgPoint')
          myPoint[1].classList.add('changeBgPoint')
          myPoint[2].classList.add('changeBgPoint')
          myPoint[3].classList.add('changeBgPoint') 
        }
      }
   
    }

    this.getAwards = (_this, date) => {
      Variable.getAwards(date).then((res) => {
        if (res.data) {
          console.log('click',res.data)
          if (res.data.data) {
            res = res.data.data
            if (res.ticket) {
              _this.props.changeAwards([...res.ticket, ...res.bedding1, ...res.bedding2, ...res.bring_up_1, ...res.bring_up_2,...res.bring_up_3,...res.help_sleep1,...res.help_sleep2])
            }
          }
        }
      })
    }
	}
  componentDidMount(){
    this.getLine()
  }
	lis () {
		return this.state.numbers.map((number) => <li key={number}>{number}</li>)
	}
	// todoList() {
	// 	return this.props.todoList.map((item) => <li key={item.text}>{parseInt(item.text)}</li>)
	// }

	change () {
		this.setState({
			numbers: this.state.numbers.filter(function(item, index, arr) {
				return item % 2 === 1
			})
		})
		this.props.changeParentTit('子组件改变的', '兄弟组件改变的')()
  }
 

  render () {
    return (
			<div className="header">
				<div className="banner">
          <img src={bannerImg} alt=""/>
        </div>
        <ul className="timeLine">
          <li onClick={this.dateChange1}>
            <p>11月12日</p>
            <p>17:00</p>
          </li>
          <li onClick={this.dateChange2}>
            <p>11月19日</p>
            <p>17:00</p>
          </li>
          <li onClick={this.dateChange3}>
            <p>11月26日</p>
            <p>17:00</p>
          </li>
          <li onClick={this.dateChange4}>
            <p>12月03日</p>
            <p>17:00</p>
          </li>
          <div className="line"></div>
        </ul>
        <h5>距离下一轮抽奖还有：<span>{
          Variable.dateCount(new Date().getDate())
        }</span>天    火爆销售额：<span>{Variable.priceSwitch(this.props.totalAmount)}</span>元</h5>
			</div>
    )
  }
}

const mapStateToProps = state => ({
  awards: state.awards
})

const mapDispatchToProps = dispatch => ({
  changeAwards: (arr) => dispatch(changeAwards(arr))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
