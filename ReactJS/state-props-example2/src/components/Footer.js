import React, { Component } from 'react'

export default class Footer extends Component {
constructor(props){
    super(props)
        this.state = {
            username: ''
        }
}

    render() {
        console.log('Test props', this.props)
        return (
            <div>
                <footer>
                    <h4>
                        Footer
                    </h4>
                    <p>
                        Magna exercitation cupidatat veniam laboris dolore aliquip dolore ad amet ad sit.
                    </p>
                    <h2>User adalah:</h2>
                    <p>
                        {this.props.username}
                    </p>
                    <button onClick={this.props.actionClick.bind(this)}>Click lagi dong!</button>
                </footer>
            </div>
        )
    }
}
