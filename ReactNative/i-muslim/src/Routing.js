import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import Login from './components/Login'
import Home from './components/HomeList'
class Routing extends Component {
    render() {
        return (
            <Container style={{flex:1}}>
                < Login />
                {/* <Home /> */}
            </Container>
        )
    }
}

export default Routing
