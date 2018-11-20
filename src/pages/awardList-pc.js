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
      totalAmount: ''
    }
    this.Variable = {
      boxHeight: this.state.height - (this.state.width * 0.26)
    }
    this.getAwards = () => {
      let _this = this
      let date = new Date().getDate()
      let mouth = 11
        if(date < 19 && date > 11){
          date = 12
        }else if (date > 18 && date < 26 ){
          date = 19
        }else if (date > 25 || date < 3){
          date = 26
        }else if(date == 3){
          mouth = 12
          date = 3
        }
      let date1 = '2018-' + mouth + '-' + date
      Variable.getAwards(date1)
      .then(function (res) {
        console.log(999888777, res,date1)
        if (res.data) {
          _this.setState({totalAmount: res.data.totalAmount})
          if (res.data.data) {
            res = res.data.data
          }
        }
        _this.setState({awards: [...res.bedding1, ...res.bedding2, ...res.bring_up_1, ...res.bring_up_2,...res.bring_up_3,...res.help_sleep1,...res.help_sleep2]})
        // console.log('successsss', _this.setState);
        let myUl = document.getElementById('egg_ul') 
        console.log(5555,myUl.scrollHeight)
        let myList = document.getElementsByClassName('awardList')[0]
        myList.style.height = myUl.scrollHeight + 'px'
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    this.getLine = () => {
      let date = new Date().getDate()
      let mouth = new Date().getMonth()
      console.log('today is',date,mouth)
      let myTimeLine = document.getElementsByClassName('timeLine')
      let myPoint1 = document.getElementsByClassName('li-1')
      let myPoint2 = document.getElementsByClassName('li-2')
      let myPoint3 = document.getElementsByClassName('li-3')
      let myPoint4 = document.getElementsByClassName('li-4')
      if(date > 11 && date < 19){
        console.log(date)
        myTimeLine[0].classList.add('timeLineChangeWidth1')
        myPoint1[0].classList.add('changeBgPoint')
      }else if(date > 18 && date < 26 ){
        myTimeLine[0].classList.add('timeLineChangeWidth2')
        myPoint1[0].classList.add('changeBgPoint')
        myPoint2[0].classList.add('changeBgPoint')
      }else if(date > 25 || (date < 3 && mouth == 11)){
        myTimeLine[0].classList.add('timeLineChangeWidth3')
        myPoint1[0].classList.add('changeBgPoint')
        myPoint2[0].classList.add('changeBgPoint')
        myPoint3[0].classList.add('changeBgPoint')
      }else if(mouth == 11 && date == 3){
        myTimeLine[0].classList.add('timeLineChangeWidth4')
        myPoint1[0].classList.add('changeBgPoint')
        myPoint2[0].classList.add('changeBgPoint')
        myPoint3[0].classList.add('changeBgPoint')
        myPoint4[0].classList.add('changeBgPoint') 
      }else if(mouth > 10 && date > 3){
        myTimeLine[0].classList.add('timeLineChangeWidth4')
        myPoint1[0].classList.add('changeBgPoint')
        myPoint2[0].classList.add('changeBgPoint')
        myPoint3[0].classList.add('changeBgPoint')
        myPoint4[0].classList.add('changeBgPoint') 
      }
      
   
    }
  }

  
  componentWillMount() {
    this.getAwards()
    console.log(2333333)
  }
  componentDidMount () {
    this.getLine()
    this.setState({width: this.refs.drawList_pc.clientWidth})
    
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
              case 'ticket':
              type = '澳网外卡赛奖'
              break;
            case 'bedding1':
              type = '床品奖'
              break;
            case 'bedding2':
              type = '床品奖'
              break;
            case 'bring_up_1':
              type = '育儿奖'
              break;
            case 'bring_up_2':
              type = '育儿奖'
              break;
            case 'bring_up_3':
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
                type = '珠海观赛门票'
                break;
              case 'bedding1':
                type = '芯逸桑蚕丝薄被'
                break;
              case 'bedding2':
                type = '伊芙卡罗毯'
                break;
              case 'bring_up_1':
                type = '儿童功能书桌椅'
                break;
              case 'bring_up_2':
                type = '儿童可调硅胶枕'
                break;
              case 'bring_up_3':
                type = '幼儿舒睡硅胶枕'
                break;
              case 'help_sleep1':
                type = '眼精灵按摩眼罩'
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
      <ul ref="drawList_pc" className="drawList-pc" style={styleComponent.draw}>
        <li className="left" >
          <div className="top">
            <h2>{
              Variable.dateCount(new Date().getDate())
            }<span>天</span></h2>
            <h5>距下一轮抽奖还有</h5>
          </div>
          <div className="bot">
            <h2>{Variable.priceSwitch(this.state.totalAmount)}<span>元</span></h2>
            <h5>火爆销售额</h5>
          </div> 
        </li>
        <li className="min">
          <div className='minBgText'></div>
          <ul className="top timeLine">
            <li className='li-1'>
              <p>11月12日</p>
              <p>17:00</p>
            </li>
            <li className='li-2'>
              <p>11月19日</p>
              <p>17:00</p>
            </li>
            <li className='li-3'>
              <p>11月26日</p>
              <p>17:00</p>
            </li>
            <li className='li-4'>
              <p>12月03日</p>
              <p>17:00</p>
            </li>
            <div className="line"></div>
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
                <div className='awardList'>
                <ul id='egg_ul'>
                  {awards}
                </ul>
                <ul >
                  {awards}
                </ul>
              {/* </marquee> */}
            </div>
            </div>
          </div>
        </li>

        <li className="right">
          <h4>全国奖品池</h4>
          <ul>
            <div className='rowup'>
            <div>
            <li>
              <h5>澳网外卡赛奖  25名</h5>
              <div></div>
              <p><span>澳网亚太区外卡赛-珠海观赛门票</span></p>
              <p><span>澳大利亚网球公开赛-墨尔本门票，为满额直送，不参与抽奖，</span></p>
              <p><span>详情请到本地慕思门店咨询。</span></p>
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
                  <span>芯逸桑蚕丝夏被</span>
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
              <h5>澳网外卡赛奖  25名</h5>
              <div></div>
              <p><span>澳网亚太区外卡赛-珠海观赛门票</span></p>
              <p><span>澳大利亚网球公开赛-墨尔本门票，为满额直送，不参与抽奖，</span></p>
              <p><span>详情请到本地慕思门店咨询。</span></p>
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
                  <span>芯逸桑蚕丝夏被</span>
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
           
          </ul>
          <div className='bottom-show'></div>
        </li>
        
      </ul>
    )
  }
}

export default AwardListPC
