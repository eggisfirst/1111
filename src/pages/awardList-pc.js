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
      width: window.innerWidth,
      height: window.innerHeight,
      awards: [],
      totalAmount: '1898'
    }
    this.Variable = {
      boxHeight: this.state.height - (this.state.width * 0.26)
    }
    this.getAwards = () => {
      let _this = this
      axios.get(`${Variable.path}`, {
        params: {
          date: '2018-09-09',
          // province: '辽宁',
          // city: '大连市'
        }
      })
      .then(function (res) {
        console.log(999888777, res)
        if (res.data) {
          _this.setState({totalAmount: res.data.totalAmount})
          if (res.data.data) {
            res = res.data.data
          }
        }
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
    console.log(2333333)
  }
  componentDidMount () {
    let awardsBox = document.getElementById('awardsBox')
    let awardList = document.getElementById('awardList')
    let scrollTop
    this.setState({width: this.refs.drawList_pc.clientWidth})
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
      },
      boxHeight: {
        height: `${this.Variable.boxHeight}px`
      }
    }
    const awards = this.state.awards.map((item, i) => 
      // console.log(11112222, this.state.awards)
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
      <ul ref="drawList_pc" className="drawList-pc" style={styleComponent.draw}>
        <li className="left" style={styleComponent.boxHeight}>
          
          <div className="top">
            <h2>{
              Variable.dateCount(new Date().getDate())
            }<span>天</span></h2>
            <h5>距下一轮抽奖还有</h5>
          </div>
          <div className="bot">
            <h2>{(this.state.totalAmount)}<span>人</span></h2>
            <h5>参与人数</h5>
          </div> 
        </li>
        <li className="min">
          <ul className="top date4">
            <li>
              <span>11月12日</span>
              <span>17:00</span>
            </li>
            <li>
              <span>11月19日</span>
              <span>17:00</span>
            </li>
            <li>
              <span>11月26日</span>
              <span>17:00</span>
            </li>
            <li>
              <span>12月03日</span>
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

        <li className="right" style={styleComponent.boxHeight}>
          <h4>全国奖品池</h4>
          <ul>
            <div className='rowup'>
            <div>
            <li>
              <h5>珠海澳网门票奖  25名</h5>
              <div></div>
              <p><span>澳网亚太区外卡赛-珠海观赛门票</span></p>
            </li>
            <li>
              <h5>育儿奖  244名</h5>
              <div>
                <strong className="m1"></strong>
                <p>
                  <span>儿童功能书桌椅(4名)</span>  
                </p>
              </div>
              <div>
              <strong className="m2"></strong>
                <p>
                  <span>儿童可调硅胶枕(120名）</span>
                  <span>幼儿舒睡硅胶枕(120名）</span>
                </p>
              </div>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </li>
            <li>
              <h5>床品奖  700名</h5>
              <div>
                <strong className="m3"></strong>
                <p>
                  <span>家纺芯逸桑蚕丝夏被</span>
                  <span>型号DZZ1-016(100名）</span>
                </p>
              </div>
              <div>
                <strong className="m4"></strong>
                <p>
                  <span>伊芙卡罗毯(600名）</span>
                </p>
              </div>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </li>
            <li>
              <h5>助眠奖  520名</h5>
              <div>
                <strong className="m5"></strong>
                <p>
                  <span>眼精灵按摩眼罩</span>
                  <span>GZZ1-009(120名）</span>
                </p>
              </div>
              <div>
                <strong className="m6"></strong>
                <p>
                  <span>情侣枕</span>
                  <span>PZZ1-014(400名）</span>
                </p>
              </div>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </li>
            </div>
            <div>
            <li>
              <h5>珠海澳网门票奖  25名</h5>
              <div></div>
              <p><span>澳网亚太区外卡赛-珠海观赛门票</span></p>
            </li>
            <li>
              <h5>育儿奖  244名</h5>
              <div>
                <strong className="m1"></strong>
                <p>
                  <span>儿童功能书桌椅(4名)</span>  
                </p>
              </div>
              <div>
              <strong className="m2"></strong>
                <p>
                  <span>儿童可调硅胶枕(120名）</span>
                  <span>幼儿舒睡硅胶枕(120名）</span>
                </p>
              </div>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </li>
            <li>
              <h5>床品奖  700名</h5>
              <div>
                <strong className="m3"></strong>
                <p>
                  <span>家纺芯逸桑蚕丝夏被</span>
                  <span>型号DZZ1-016(100名）</span>
                </p>
              </div>
              <div>
                <strong className="m4"></strong>
                <p>
                  <span>伊芙卡罗毯(600名）</span>
                </p>
              </div>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </li>
            <li>
              <h5>助眠奖  520名</h5>
              <div>
                <strong className="m5"></strong>
                <p>
                  <span>眼精灵按摩眼罩</span>
                  <span>GZZ1-009(120名）</span>
                </p>
              </div>
              <div>
                <strong className="m6"></strong>
                <p>
                  <span>情侣枕</span>
                  <span>PZZ1-014(400名）</span>
                </p>
              </div>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </li>
            </div>
            </div>
            <div className='bottom-show'></div>
          </ul>
        </li>
        
      </ul>
    )
  }
}

export default AwardListPC
