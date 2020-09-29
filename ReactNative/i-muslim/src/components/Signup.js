import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Text, Body, Button } from "native-base";

export default class Signup extends Component {
    static navigationOptions = {
        header: null,
        tabBarVisible: false
    }
    render() {
        return (
            <Container style={{ backgroundColor: '#65D4F9', flex: 1 }}>
                <Content>
                    <View style={{ justifyContent: 'center', paddingVertical: 80, flex: 1, borderRadius: 10, width: 450, height: 580 }}>
                        <View style={{ alignSelf: "center" }}>
                            <Image source={require('../assets/logo_imuslim_with_text.png')} style={{ width: 170, height: 70 }} />
                        </View>

                        <Container style={styles.FormLogin} >
                            <Form >
                                <Item style={styles.inputText}>
                                    <Input placeholder="Username" />
                                </Item>
                                <Item style={styles.inputText}>
                                    <Input placeholder="Email" />
                                </Item>
                                <Item style={styles.inputText}>
                                    <Input placeholder="Password" />
                                </Item>
                                <Item style={styles.inputText}>
                                    <Input placeholder="Retype Password" />
                                </Item>
                            </Form>
                            <Button rounded info
                                style={styles.buttonLogin}
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text style={styles.loginText}>Sign Up</Text>
                            </Button>
                            
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ color: '#ADAFAF', marginHorizontal: 9 }}>Have an account?</Text>
                                <Text style={styles.textSignup} onPress={() => this.props.navigation.navigate('Login')}>Login.</Text>
                            </View>

                        </Container>

                    </View>
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    FormLogin: {
      marginTop: 10,
      paddingTop: 15,
      paddingBottom: 15,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 20,
      width: '79%'
    },
    buttonLogin: {
      marginHorizontal: 50,
      marginTop: 15,
      justifyContent: 'center'
    },
    inputText: {
      width: "90%"
    },
    loginText: {
      fontSize: 20,
      fontWeight: 'bold',
      alignContent: "center"
    },
    label: {
      color: '#ADAFAF',
      textAlign: 'center'
    },
    textSignup: {
      color: '#65D4F9',
      textAlign: 'center',
      fontWeight: 'bold'
    }
  
  })