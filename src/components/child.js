import React, { Component } from 'react'
// import { createStore } from 'redux'
// import reducer from '../reducers'
// const store = createStore(reducer)

class Btn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5]
		}
	}

	lis () {
		return this.state.numbers.map((number) => <li key={number}>{number}</li>)
	}
	// todoList() {
	// 	return this.props.todoList.map((item) => <li key={item.text}>{parseInt(item.text)}</li>)
	// }

	change () {
		this.setState({
			numbers: this.state.numbers.filter(function(item, index, arr) {
				return item % 2 === 1
			})
		})
		this.props.changeParentTit('子组件改变的', '兄弟组件改变的')()
	}

	componentDidMount () {
		// const { store } = this.context
		console.log('123123123', this.props)
		// console.log('1111', this.props.todoList, store.getState().todos)
	}

  render () {
    return (
			<div>
				<ul>
					<li><button type="button" onClick={(e) => this.change(e)}>{this.props.btnName}</button></li>
					{
						this.lis()
					}
				</ul>
				<h3>redux</h3>
				<ul>
					{/* {this.todoList()} */}
				</ul>
			</div>
    )
  }
}

export default Btn
