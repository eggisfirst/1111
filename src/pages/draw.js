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
import '../sass/draw.scss'

class Draw extends Component {
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
      btnBg: startBtn,
      alertBoxShow: '',
      areaListShow: 'areaListHidden',
      areaBtnText: '全国'
    }
    // this.store = props.store || context.store
    // 变量
    this.variable = {
      name: 'mango',
      persons: [],
      key: true,
      ifDraw: true
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
      // 是否关闭页面
      if (true) {
        if (this.variable.ifDraw) {
          this.awardPerson()
        } else {
          alert('名额已抽完！')
          return
        }
      } else {
        alert(`抽奖页面关闭！`)
        return
      }
      if (this.variable.key) {
        this.variable.key = false
        setTimeout(function() {
          _this.variable.key = true
        }, 10000)
      } else {
        return
      }
      if (this.state.status) {
        // 网络抽取中奖者
        if (this.state.areaBtnText === '全国') {
          let params
          for (let i = 0; i < 5; i++) {
            if (i < 3) {
              params = {
                status: Math.random(10000),
                // province: '辽宁',
                // city: '大连市SS'
              }
            } else {
              params = {
                status: Math.random(10000),
                dealer: '电商部'
              }
            }
            this.awardPerson(params).then((res) => {
              if (res) {
                _this.variable.persons.push({
                  name: res.username,
                  phone: res.phone
                })
              }
            })
          }
        } else {
          for (let i = 0; i < 2; i++) {
            let params = {
              status: Math.random(10000),
              province: '江苏',
              city: '苏州市'
            }
            this.awardPerson(params).then((res) => {
              _this.variable.persons.push({
                name: res.username,
                phone: res.phone
              })
              console.log('苏州获取的抽奖者：', _this.variable.persons)
            })
          }
        }
        this.setState({
          status: !this.state.status,
          btnText: '停止',
          rockerBg: rockerImgBot,
          rockerMarginTop: 30,
          btnBg: stopBtn,
          persons: []
        })
        this.state.changeText = setInterval(() => {
          _this.setState({
            phone: _this.selectPhone(),
            active: !this.state.active
          })
        }, 50)
      } else {
        let temp = this.variable.persons
        console.log(999000111, temp)
        this.setState({
          status: !this.state.status,
          btnText: '开始抽奖',
          rockerBg: rockerImgTop,
          rockerMarginTop: -15,
          active: false,
          persons: temp,
          btnBg: startBtn,
          // alertBoxShow: 'alertBoxShow'
        })
        if (temp[_this.state.persons.length - 1]) {
          this.setState({
            phone: temp[_this.state.persons.length - 1].phone,
          })
        }
        let length = this.state.persons.length
        console.log(8899, this.state.persons[this.state.persons.length - 1])
        // this.setState({phone: this.state.persons[length].phone})
        clearInterval(this.state.changeText)
        this.variable.ifDraw = false
      }
    }
    this.selectPhone = () => {
      const arr = this.state.phones
      const i = Math.random() * (arr.length - 1)
      return arr[parseInt(i, 10)]
    }

    // 关闭弹框
    this.closeAlert = () => {
      this.setState({alertBoxShow: ''})
    }

    // 抽取中奖客户
    this.awardPerson = (params) => {
      params = params
      let _this = this
      let promise = new Promise((resolve, reject) => {
        axios.get(`${Variable.path}drawLottery`, {
          params: params
        })
        .then(function (res) {
          if (res.data) {
            resolve(res.data.data)
            // _this.variable.persons.push(res.data.data)
          } else {
            resolve(false)
          }
        })
        .catch(function (error) {
          reject(error)
        });
      })
      return promise
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

    // 
    this.toggle = () => {
      if (this.state.areaListShow === "areaListShow") {
        this.setState({areaListShow: 'areaListHidden'})
      } else {
        this.setState({areaListShow: 'areaListShow'})
      }
    }
    this.changeArea1 = () => {
      this.setState({
        areaBtnText: '全国',
        areaListShow: 'areaListHidden',
      })
      this.variable.persons = []
      this.variable.ifDraw = true
    }
    this.changeArea2 = () => {
      this.setState({areaBtnText: '苏州', areaListShow: 'areaListHidden'})
      this.variable.persons = []
      this.variable.ifDraw = true
    }
  }
  componentWillMount() {
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
    const awardList = this.state.persons.map((item) => {
      <p>
        <span>{item.name}</span>
        <span>{item.phone}</span>
      </p>
    })
    const persons = this.state.persons.map((item, i) => 
      <li key={i}>
        <p><span>{item.name}：</span><span>{item.phone}</span></p>
        {/* <p>购买商品：<input type="text" defaultValue={item ? item.goodsName : ''}/></p> */}
      </li>
    )
    return (
      <div className="draw" style={styleComponent.draw}>
        <div className="tit"></div>
        <div className="awardBox">
          <h3></h3>
          <p>
            <span>澳洲新西兰之旅</span>
            <span>1名</span>
          </p>
          <h3 className="awardList"></h3>
          <ul>
            {persons}
          </ul>
        </div>
        <div className="box">
          <div className={`alertBox ${this.state.alertBoxShow}`}>
            
            <h2>恭喜中奖啦！<button type="button" onClick={this.closeAlert}></button></h2>
            <div>
              {awardList}
              {/* <p>
                <span>{this.state.persons.length > 0 ? this.state.persons[this.state.persons.length - 1].username : ''}</span>
                <span>{this.state.persons.length > 0 ? this.state.persons[this.state.persons.length - 1].phone : ''}</span>
              </p> */}
              {/* <p>购买商品：<input type="text" defaultValue={this.state.persons.length > 0 ? this.state.persons[this.state.persons.length - 1].goodsName : ''}/></p> */}
            </div>
          </div>
          <div className="drawBox">
            <div>
              <h3>慕思818现场抽奖</h3>
              <ul className="first">{phoneList}</ul>
              <span style={styleComponent.rocker}></span>
              <div className="selectBox">
                <span onClick={this.toggle}>{this.state.areaBtnText}</span>
                <ul className={this.state.areaListShow}>
                  <li onClick={this.changeArea1}>全国</li>
                  <li onClick={this.changeArea2}>苏州</li>
                </ul>
              </div>
            </div>
            <button style={styleComponent.btnBg} type="button" onClick={this.phoneChange}></button>
          </div>
        </div>
        {/* <span className="phone">{this.state.phone}</span>
        <button type="button" onClick={this.phoneChange}>{this.state.btnText}</button> */}
      </div>
    )
  }
}

export default Draw
