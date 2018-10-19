import React, { Component } from 'react'
// import Variable from '../variable'
import Mango from '../variable/nameSpace'
// import axios from 'axios'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// 组件
import Header from '../components/header'
import AwardList from '../components/awardList'
import Rules from '../components/rules'
import Prizes from '../components/prizes'

// 样式引入
import '../css/normalize.css'
import '../sass/main.scss'
import '../sass/index.scss'

// let store = createStore(todoApp)

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      btnStatus: [true, false, false],
      totalAmount: ""
    }
    this.clickBtn1 = () => {
      this.setState({btnStatus: [true, false, false]})
    }
    this.clickBtn2 = () => {
      this.setState({btnStatus: [false, true, false]})
    }
    this.clickBtn3 = () => {
      this.setState({btnStatus: [false, false, true]})
    }
    this.setTotalAmount = (num) => {
      this.setState({totalAmount: num})
    }
  }
  componentWillReceiveProps(nextProps){
    // if(this.props != nextProps) console.log('输出todos为：', nextProps.todos);
  }
  componentWillMount() {

  }
  componentDidMount () {
    console.log(Mango.name)
    Mango.test()
    // console.log('mango', store.getState().todos[0].text, this)
  }
  render () {
    const styleComponent = {
      // draw: {
      //   height: `${this.state.height}px`
      // },
    }
    return (
      <div className="index">
        <Header totalAmount={this.state.totalAmount} />
        <div className="btns">
          <button onClick={this.clickBtn1} className={this.state.btnStatus[0] ? 'on' : 'out'} type="button">{this.state.btnStatus[0] ? '中奖名单' : ''}</button>
          <button onClick={this.clickBtn2} className={this.state.btnStatus[1] ? 'on' : 'out'} type="button">{this.state.btnStatus[1] ? '抽奖规则' : ''}</button>
          <button onClick={this.clickBtn3} className={this.state.btnStatus[2] ? 'on' : 'out'} type="button">{this.state.btnStatus[2] ? '奖项设置' : ''}</button>
        </div>
        <div className="content">
          {/* <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}> */}
            <AwardList
            status={this.state.btnStatus[0]}
            changeTotalAmount={this.setTotalAmount.bind(this)} />
          {/* </ReactCSSTransitionGroup> */}
          <Rules
          status={this.state.btnStatus[1]} />
          <Prizes
          status={this.state.btnStatus[2]} />
        </div>
      </div>
    )
  }
}

export default Index
