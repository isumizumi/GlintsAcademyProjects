import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 1,
      showComponent: true
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({
      count: 2,
      showComponent: false
    })
    }, 3000);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Lifecycle Component</h1>
        <button className="btn">Component Button {this.state.count}</button>
      </div>      
    )
  }
}
