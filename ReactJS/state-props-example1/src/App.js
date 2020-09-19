import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Footer from './components/Footer';
import InputForm from './components/InputForm';
import CardUser from './components/CardUser';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      text: '',
      user: []
    }
  }

  actionClick() {
    this.setState({
      username: 'fluxcup'
    })
  }

  changeText = (text) => {
    this.setState({
      text: text
    })
  }

  componentWillMount() {
    console.log('Will u mount me, sayang...')
  }

  componentDidMount() {
    console.log('Did u mount me, sayang...')
    axios.get('https://btm-rn.herokuapp.com/api/v1/users/')
      .then(res => {
        this.setState({
          user: res.data.results
        })
      });
  }

  componentWillUpdate() {
    console.log('Will u update me, sayang...')
  }

  componentDidUpdate() {
    console.log('Did u update me, sayang...')
  }

  componentWillUnmount() {
    console.log('Will u unmount me, sayang...')
  }

  render() {
    console.log(this.state.user)
    const looping = this.state.user.map((usr, index) => {
      return (
        // <div>
        //   <p>{usr.name} | {usr.age}</p>
        // </div>
        <Col key={index}>
          <CardUser
            name={usr.name}
            age={usr.age}
          />
        </Col>
      )
    }
    );

    return (
      <div>
        <header>
          <h1>
            Header
          </h1>
          <InputForm changeText={this.changeText.bind(this)} />
          <p>
            {this.state.text}
          </p>
        </header>
        <article>
          <Container className="body-content">
            <h2>User List</h2>
            <Row className='d-flex'>
              {looping}
              <hr />
            </Row>
          </Container>
          {/* {looping} */}
            <h2>
              Body
          </h2>
            <p>
              Reprehenderit veniam et irure tempor fugiat. Sunt dolor dolor pariatur Lorem Lorem nulla fugiat mollit ipsum pariatur incididunt labore fugiat pariatur. Duis in in qui reprehenderit exercitation proident sunt. Nostrud labore est adipisicing sint elit eiusmod elit sit nostrud aute in. Elit et ut ex dolor.
          </p>
            <h3>User adalah:</h3>
            <p>{this.state.username}</p>
            <button onClick={this.actionClick.bind(this)}>Click this</button>
          </article>
          <Footer
            username={this.state.username}
            actionClick={this.actionClick.bind(this)}
          />
      </div>
        )
      }
    }
