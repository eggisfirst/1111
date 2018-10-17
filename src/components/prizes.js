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
			</div>
    )
  }
}

export default prizes
