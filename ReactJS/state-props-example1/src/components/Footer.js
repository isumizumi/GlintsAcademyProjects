import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:''
        }
    }
    render() {
        console.log('Test props', this.props)
        return (
            <div>
                <footer>
                    <h3>
                        Footer
                    </h3>
                    <p>
                        Non aliquip esse irure sunt nulla in ea. Quis enim sunt dolore aliqua laboris nisi sint do occaecat irure aliqua proident ut eiusmod. Aute ut dolor elit aliqua irure ut magna.
                    </p>
                    <h3>User adalah:</h3>
                    <p>{this.props.username}</p>
                    <button onClick={this.props.actionClick.bind(this)}>Click lagi dong!</button>
                </footer>
            </div>
        )
    }
}
