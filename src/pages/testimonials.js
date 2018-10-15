import React, { Component } from 'react'
import BottTit from '../components/bott-tit'

import worldJson from '../assets/world.json'
import logoImg from '../images/logo.svg'

class Testimonials extends Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    console.log(worldJson)
  }

  render () {
    return (
      <div>
        <h1>感言</h1>
        <img alt="404" src={ logoImg } />
        <BottTit></BottTit>
      </div>
    )
  }
}

export default Testimonials
