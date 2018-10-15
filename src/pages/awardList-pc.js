import React, { Component } from 'react'
import axios from 'axios'
import Variable from '../variable'
import '../css/normalize.css'
import '../sass/main.scss'
import '../sass/awardList-pc.scss'

class AwardListPC extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      awards: [],
      awardTotal: null
    }
    this.getAwards = () => {
      let _this = this
      axios.get(`${Variable.path}getPrizes`, {
        params: {
          date: '2018-08-08'
          // province: '广东',
          // city: '汕头市'
        }
      })
      .then(function (res) {
        console.log(999888777, res)
        if (res.data) {
          _this.setState({awardTotal: res.data.awardTotal})
          if (res.data.data) {
            res = res.data.data
          }
        }
        // tempArr = [{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},{name: 'zhangsan',phone: '1882***4356',grade: '床品奖',award: '家纺芯逸桑蚕丝夏被'},]
        _this.setState({awards: [...res.firstPrize, ...res.secondPrize1, ...res.secondPrize2, ...res.thirdPrize1, ...res.thirdPrize2]})
        // console.log('successsss', _this.setState);
      })
      .catch(function (error) {
        // console.log(error);
      });
    }
  }
  componentWillMount() {
    this.getAwards()
  }
  componentDidMount () {
    let awardsBox = document.getElementById('awardsBox')
    let awardList = document.getElementById('awardList')
    console.log(99009900, awardsBox.scrollHeight)
    let scrollTop
    // window.scroll(0, 100)
    setInterval(function() {
      awardsBox.scrollBy(0,1)
      if (scrollTop === awardsBox.scrollTop) {
        awardsBox.scrollTo(0, 0)
      }
      scrollTop = awardsBox.scrollTop
    }, 10)
  }
  render () {
    const styleComponent = {
      draw: {
        height: `${this.state.height}px`
      }
    }
    const awards = this.state.awards.map((item, i) => 
      // console.log(11112222, this.state.awards)
      <li key={i}>
        <span>{item.username}</span>
        <span>{item.phone}</span>
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
                type = '助眠奖'
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
      <ul className="drawList-pc" style={styleComponent.draw}>
        <li className="left">
          <div className="top">
            <h2>5<span>天</span></h2>
            <h5>距下一轮抽奖还有</h5>
          </div>
          <div className="bot">
            <h2>{this.state.awardTotal}<span>人</span></h2>
            <h5>参与人数</h5>
          </div>
        </li>

        <li className="min">
          <ul className="top date1">
            <li></li>
            <li>
            <span>8月26日</span>
            <span>17:00</span>
            </li>
            <li></li>
            <li>
            <span>9月09日</span>
            <span>17:00</span>
            </li>
          </ul>
          <div  className="bot">
            <h4>中奖信息</h4>
            <p>
              <span>姓名</span>
              <span>手机</span>
              <span>奖项</span>
              <span>奖品</span>
            </p>
            <div className="awardsBox" id="awardsBox">
              {/* <marquee behavior="scroll" align="top" direction="up"> */}
                <ul id="awardList">
                    {awards}
                </ul>
              {/* </marquee> */}
            </div>
          </div>
        </li>

        <li className="right">
          <h4>全国奖品池</h4>
          <ul>
            <li>
              <h5>澳洲-新西兰旅游奖  30名</h5>
              <div></div>
              <p><span>全包澳洲-新西兰旅游，出游者限18周岁及以上（不含孕妇）</span></p>
            </li>
            <li>
              <h5>床品奖  200名</h5>
              <div>
                <strong className="m1"></strong>
                <p>
                  <span>家纺芯逸桑蚕丝夏被</span>
                  <span>型号DZZ1-016（100名）</span>
                </p>
              </div>
              <div>
              <strong className="m2"></strong>
                <p>
                  <span>凯奇床品四件套</span>
                  <span>型号QCK2-015（100名）</span>
                </p>
              </div>
            </li>
            <li>
              <h5>助眠奖  800名</h5>
              <div>
                <strong className="m3"></strong>
                <p>
                  <span>眼睛灵按摩眼罩</span>
                  <span>型号GZZ1-009（200名）</span>
                </p>
              </div>
              <div>
                <strong className="m4"></strong>
                <p>
                  <span>情侣枕</span>
                  <span>型号PZZ1-014（600名）</span>
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}

export default AwardListPC
