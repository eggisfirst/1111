import React, { Component } from 'react'

class BottTit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // tit: '首页1'
    }
  }
  render () {
    return (
      <p className="bott-tit">慕思寝具{this.props.tit}</p>
    )
  }
}

export default BottTit
