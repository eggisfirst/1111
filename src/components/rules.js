import React, { Component } from 'react'
import Variable from '../variable'
import axios from 'axios'
import '../sass/components/rules.scss'
// 引入抽奖规则数据
import rulesData from '../assets/json/rules.js'
import bannerImg from '../images/top.jpg'

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
    console.log(99887766554, rulesData)
	}

  render () {
    const styleComponent = {
      show: {
        display: this.props.status ? 'block' : 'none'
      }
    }
    const rulesList = rulesData.map((item, i) => 
      <p key={`${i}1`}>{item}</p>
    )
    return (
      <div
      className={`rules ${this.props.status ? 'enter' : 'leave'}`}
      style={styleComponent.show}>
				{rulesList}
			</div>
    )
  }
}

export default rules
