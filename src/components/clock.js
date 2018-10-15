import React from 'react'
class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
    this.numbers = [1, 2, 3, 4, 5]
    this.doubled = []
  }

  componentDidMount () {
    this.doublefun()
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  deleteRow (id) {
    alert(id)
  }

  doublefun () {
    this.doubled = this.numbers.map((number) => [number, number + 1])
    console.log(this.doubled)
  }

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={(e) => this.deleteRow('123456', e)}>Delete Row</button>
      </div>
    )
  }
}

export default Clock