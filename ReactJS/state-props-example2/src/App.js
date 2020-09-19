import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export class App extends Component {
  constructor(props){
    super(props)
    // 1. state declaring data members for the application
      this.state = {
        username: '',
        text: ''
      }
  }

  // 2. method to load content state object 
  actionClick(){
    this.setState(
      {
        username: 'fluxcup'
      }
  )}

  render() {
    console.log('Test state', this.state)
    return (
      <div>
        <Header />
        <article>
          <p>
            Magna esse cillum irure est ipsum mollit eiusmod ipsum et nisi. Minim dolor do cillum eiusmod elit adipisicing excepteur reprehenderit incididunt laboris reprehenderit quis. Anim ut voluptate esse enim et laborum commodo consectetur magna aute consequat tempor. Velit do ullamco esse ipsum tempor sint cillum do Lorem sint reprehenderit officia tempor. Lorem cupidatat anim culpa ullamco id excepteur ad elit enim minim nisi id exercitation id. Qui pariatur non adipisicing irure officia deserunt incididunt aliqua duis veniam cillum et ut.
          </p>
          <h2>User adalah:</h2>
          <p>{this.state.username}</p>
          <button onClick={this.actionClick.bind(this)}>Click this</button>
        </article>
        <Footer username={this.state.username} actionClick={this.actionClick.bind(this)} /> {/* Child component: Footer, send to props*/}
      </div>
    )
  }
}

export default App