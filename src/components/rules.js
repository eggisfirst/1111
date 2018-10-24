import React, { Component } from 'react'
// import Variable from '../variable'
// import axios from 'axios'
import '../sass/components/rules.scss'
// 引入抽奖规则数据
// import rulesData from '../assets/json/rules.js'
// import bannerImg from '../images/top.jpg'

class rules extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5],
      awards: [],
      awardTotal: null
    }
	}

	componentDidMount () {
    // this.getAwards()
    // console.log(99887766554, rulesData)
	}

  render () {
    const styleComponent = {
      show: {
        display: this.props.status ? 'block' : 'none'
      }
    }
    // const rulesList = rulesData.map((item, i) => 
    //   <p key={`${i}1`}>{item}</p>
    // )
    
    return (
      <div
      className={`rules ${this.props.status ? 'enter' : 'leave'}`}
      style={styleComponent.show}>
        {/* {rulesList} */}
        <div className='ruleDetails'>
          <ul>
            <h1>25个澳网亚太区外卡赛-珠海观赛门票名额全国大抽奖</h1>
            <li>1、消费<span>满1万元（含），</span>享抽<span>澳网亚太区外卡赛-珠海观赛门票</span>（门票包含4天珠海游）；</li>
            <li>2、消费<span>满1万元，</span>在抽奖系统占<span>1个坑位，2万元</span>占<span>2个</span>坑位，以此类推……占的坑位越多，中奖机率越大；</li>
            <li>3、抽奖时间: <span>11月12日（周一）17:00 ，</span>一次性抽取全部的25个名额；</li>
            <li>4、中奖名单通过慕思官方微信服务号（微信号：derucci02）公布，亦可检索“澳网门票”查询。</li>
            <p>（注：以上珠海外卡赛门票，均为1个名额2张门票，1张门票限1人入场观赛）</p>
          </ul>
          <br/>
          <ul>
            <h1>1464个慕思产品全国大抽奖</h1>
            <li>1、消费<span>满5千元（含），</span> 享抽<span>慕思产品奖</span>；</li>
            <li>2、消费<span>满5千元</span>在抽奖系统占<span>1个坑位，1万元</span>占<span>2个</span>坑位，以此类推……占坑位越多，中奖机率越大；</li>
            <li>3、抽奖时间:<span>11月12日、19日、26日、12月3日（周一）17:00</span>；</li>
            <li>4、中奖名单通过慕思官方微信服务号（微信号：derucci02)公布，亦可检索“双11抽奖”查询。</li>
          </ul>
        </div>
			</div>
    )
  }
}

export default rules
