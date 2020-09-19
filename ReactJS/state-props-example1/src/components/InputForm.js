import React, { Component } from 'react'

export default class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  onEnter = () => {
    this.props.changeText(this.state.text)
  }

  render() {
    console.log('Test props header', this.props)
    return (
      <div>
        <input
          type='text'
          placeholder='Input text'
          value={this.state.text}
          onChange={param => this.setState({ text: param.target.value }, this.onEnter)}
          // onKeyPress={this.onEnter}
        />
      </div>
    )
  }
}
