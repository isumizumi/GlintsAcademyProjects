import React, { Component } from 'react'
import {
    Text, View, StyleSheet, Dimensions,
    TouchableOpacity, ImageBackground, ScrollView,
    ToastAndroid
} from 'react-native'
import FormLogo from './FormLogo'
// import FormInput from './FormInput'
import { Container, Form, Item, Input, Label } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

export default class LoginDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    static navigationOptions = {
        header: null
      }

    handleEmail(val) {
        this.setState({
            email: val
        })
    }

    handlePassword(val) {
        this.setState({
            password: val
        })
    }

    async handleLogin() {
        const { email, password } = this.state;
        try {
            const apiLogin = await axios({
                method:'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: 'https://be-kickin.herokuapp.com/api/v1/user/login',
                data: JSON.stringify({
                    email,
                    password
                })
            })
            console.log('datanya', apiLogin.data.data)
            if (apiLogin.data.data.token) {
                    await AsyncStorage.setItem('@token', apiLogin.data.data.token)
                    this.props.navigation.navigate('Profile', {
                        email: this.state.email,
                        password: this.state.password
                    })
            }
        // try {
        //     const res = await axios.post(
        //         'https://be-kickin.herokuapp.com/api/v1/user/login',
        //         {
        //         email: email,
        //         password: password,
        //         },
        //     );
        //     const token = res.data.data.token;
        //     await AsyncStorage.setItem('@token', token);
        //     console.log('Success to login');
        //     this.props.navigation.navigate('Profile', {
        //         email: this.state.email,
        //         password: this.state.password
        //     })
        } 
        catch (e) {
                console.log(e)
                ToastAndroid.show('Wrong user name & password. Try again!', ToastAndroid.SHORT)
        }
    }

    render() {
        console.disableYellowBox = true
        return (
            <ScrollView>
                <ImageBackground source={require('../img/Background1.jpg')} style={styles.background}>
                    <FormLogo />
                    {/* <FormInput
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={() => this.props.navigation.navigate('Profile', {
                                  email: this.state.email
                        })}
                        value={this.state.email}
                    /> */}
                    {/* <FormInput
                        placeholder="Kata Sandi"
                        secureTextEntry
                        onChangeText={() => this.props.navigation.navigate('Profile', {
                            password: this.state.password
                        })}
                        value={this.state.password}
                    /> */}
                    <Form style={styles.form}>
                        <Item floatingLabel style={styles.item}>
                            <Label style={styles.label}>Email</Label>
                            <Input style={styles.label} 
                                   keyboardType="email-address"
                                   onChangeText={val => this.handleEmail(val)}
                                // onChangeText={(email) => this.props.navigation.navigate('Profile', 
                                // {
                                //   email: this.setState(email)
                                // })}
                                // value={this.state.email}
                            />
                        </Item>
                        <Item floatingLabel last style={styles.item}>
                            <Label style={styles.label}>Password</Label>
                            <Input style={styles.label} 
                                   secureTextEntry
                                   onChangeText={val => this.handlePassword(val)}
                                // onChangeText={(password) => this.props.navigation.navigate('Profile', 
                                // {
                                //   password: this.setState(password)
                                // })}
                                // value={this.state.password}
                            />
                        </Item>
                    </Form>
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>this.handleLogin()}
                        >
                            <Text style={styles.buttonText}>Masuk</Text>
                        </TouchableOpacity>
                        <Text style={styles.signupText}>Belum punya akun?</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }}><Text style={styles.signupButton}> Daftar di sini</Text></TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    signupTextCont: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    button: {
        width: 300,
        backgroundColor: '#57BC90',
        borderRadius: 25,
        marginVertical: 5,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    form: {
        justifyContent: 'center',
        width: '70%',
        marginLeft: 50
    },
    label: {
        color: '#015249'
    },
    item: {
        borderBottomWidth: 1, 
        borderBottomColor: '#015249'
    }
});
