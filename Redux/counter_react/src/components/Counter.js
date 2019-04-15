import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p>
        El valor del estado es <strong id="value">{this.props.value}</strong> <br></br>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </p>
    )
  }
}

export default Counter
