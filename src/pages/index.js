import React, { Component } from 'react'
import Variable from '../variable'
import axios from 'axios'

import rockerImgTop from '../assets/images/top.png'
import rockerImgBot from '../assets/images/bottom.png'
import startBtn from '../images/begin.png'
import stopBtn from '../images/stop.png'

// 样式引入
import '../css/normalize.css'
import '../sass/main.scss'
import '../sass/index.scss'

class Testimonials extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      phone: '1888***8888',
      status: true,
      btnText: '开始抽奖',
      changeText: null,
      rockerBg: rockerImgTop,
      rockerMarginTop: -15,
      phones: [],
      active: false,
      persons: [],
      btnBg: startBtn
    }
    // this.store = props.store || context.store
    // 变量
    this.variable = {
      name: 'mango',
      persons: [],
      key: true
    }
    this.changeTit = (tit, name) => {
      let _this = this
      return function() {
        console.log(tit)
        _this.setState({tit: tit})
        // 兄弟组件数据传递
        _this.variable.name = name
        console.log(_this.state.tit)
      }
    }
    this.phoneChange = () => {
      let _this = this
      // 检测抽奖名额是否抽完
      const length = this.state.persons.length
      if (length < 2) {
        // this.awardPerson()
      } else {
        alert('名额已抽完！')
        return
      }
      if (this.variable.key) {
        this.variable.key = false
        setTimeout(function() {
          _this.variable.key = true
        }, 5000)
      } else {
        return
      }
      if (this.state.status) {
        this.setState({
          status: !this.state.status,
          btnText: '停止',
          rockerBg: rockerImgBot,
          rockerMarginTop: 30,
          btnBg: stopBtn
        })
        this.state.changeText = setInterval(() => {
          _this.setState({
            phone: _this.selectPhone(),
            active: !this.state.active
          })
        }, 50)
      } else {
        let temp = this.state.persons
        temp.push(this.variable.persons[temp.length])
        console.log(999000, this.variable.persons, this.state.persons.length, temp)
        this.setState({
          status: !this.state.status,
          btnText: '开始抽奖',
          rockerBg: rockerImgTop,
          rockerMarginTop: -15,
          active: false,
          phone: temp[_this.state.persons.length - 1].phone,
          persons: temp,
          btnBg: startBtn
        })
        console.log(8899, this.state.persons[this.state.persons.length])
        // this.setState({phone: this.state.persons[length].phone})
        clearInterval(this.state.changeText)
      }
    }
    this.selectPhone = () => {
      const arr = this.state.phones
      const i = Math.random() * (arr.length - 1)
      return arr[parseInt(i, 10)]
    }

    // 抽取中奖客户
    this.awardPerson = () => {
      let _this = this
      axios.get(`${Variable.path}drawLottery`, {
        params: {
          status: Math.random(10000)
        }
      })
      .then(function (res) {
        if (res.data) {
          _this.variable.persons.push(res.data.data)
        }
        console.log(222333444, _this.state.persons)
      })
      .catch(function (error) {
        // console.log(error);
      });
    }

    // 获取抽奖客户列表
    this.customers = () => {
      let _this = this
      axios.get(`${Variable.path}getPhones`, {
        params: {
          // province: '广东',
          // city: '汕头市'
        }
      })
      .then(function (res) {
        if (res.data) {
          _this.setState({
            phones: res.data.data
          })
        }
        // console.log('srss', res.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }
  componentWillMount() {
    for (let i = 0; i < 2; i++) {
      this.awardPerson()
    }
    this.customers()
    // store.dispatch(addTodo('0Learn about actions0'))
    // store.dispatch(addTodo('1Learn about actions1'))
    // store.dispatch(addTodo('2Learn about actions2'))
    // store.dispatch(addTodo('3Learn about actions3'))
  }
  componentDidMount () {
    console.log(333, this.props)
    console.log(Variable.name)
    // this.awardPerson()
  }
  render () {
    const styleComponent = {
      draw: {
        height: `${this.state.height}px`
      },
      // 摇杆背景图
      rocker: {
        background: `url(${this.state.rockerBg}) no-repeat`,
        backgroundSize: `100% 100%`,
        marginTop: `${this.state.rockerMarginTop}px`
      },
      // 按钮背景图
      btnBg: {
        background: `url(${this.state.btnBg}) no-repeat`,
        backgroundSize: '100% 100%'
      }
    }
    const phoneArr = this.state.phone.split('')
    const phoneList = phoneArr.map((number, i) =>
      (i > 3 && i < 7) ? <li key={i}>*</li> : <li className={this.state.active ? 'transition' : ''} key={i}>{number}</li>
    )
    const persons = this.state.persons.map((item, i) => 
      <li key={i}>
        <p><span>{item.username}：</span><span>{item.phone}</span></p>
        <p>购买商品：<input type="text" defaultValue={item.goodsName}/></p>
      </li>
    )
    return (
      <div className="draw" style={styleComponent.draw}>
        <div className="tit"></div>
        <div className="awardBox">
          <h3></h3>
          <p>
            <span>澳洲新西兰之旅</span>
            <span>2名</span>
          </p>
          <h3 className="awardList"></h3>
          <ul>
            {persons}
          </ul>
        </div>
        <div className="drawBox">
          <div>
            <h3>现场抽奖（大连站）</h3>
            <ul>{phoneList}</ul>
            <span style={styleComponent.rocker}></span>
          </div>
          <button style={styleComponent.btnBg} type="button" onClick={this.phoneChange}></button>
        </div>
        {/* <span className="phone">{this.state.phone}</span>
        <button type="button" onClick={this.phoneChange}>{this.state.btnText}</button> */}
      </div>
    )
  }
}
// Testimonials = connect()(Testimonials)
export default Testimonials
