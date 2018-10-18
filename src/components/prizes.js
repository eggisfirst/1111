import React, { Component } from 'react'
import Variable from '../variable'
import axios from 'axios'
import '../sass/components/prizes.scss'
// 引入抽奖规则数据
import rulesData from '../assets/json/rules.js'
import bannerImg from '../images/top.jpg'

class prizes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // awards: [],
      // awardTotal: null
    }
	}

	componentDidMount () {
    // this.getAwards()
    console.log(99887766554, rulesData)
	}

  render () {
    const styleComponent = {
      show: {
        display: this.props.status ? 'block' : 'none'
      }
    }
    return (
      <div
      className={`prizes ${this.props.status ? 'enter' : 'leave'}`}
      style={styleComponent.show}>
        <h4>全国奖品池</h4>
        <ul>
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
                <span>儿童功能书桌椅</span>
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
            <h5>床品奖 700名</h5>
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
        </ul>
			</div>
    )
  }
}

export default prizes
