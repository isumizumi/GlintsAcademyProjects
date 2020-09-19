import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    render() {
        console.log('Test props', this.props)
        return (
            <div>
                <header>
                    <h1>
                        Header
                    </h1>
                    <input
                        type='text'
                        placeholder="Insert text"
                        onChange={param => this.setState({ text: param.target.value })}
                    />
                    <p>
                        {this.state.text}
                    </p>
                </header>
            </div>
        )
    }
}
