import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';
import FormLogo from './FormLogo';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { connect } from 'react-redux'
import { auth } from '../redux/action/AuthAction';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  static navigationOptions = {
    header: null,
  };

  handleUsername(val) {
    this.setState({
      name: val,
    });
  }

  handleEmail(val) {
    this.setState({
      email: val,
    });
  }

  handlePassword(val) {
    this.setState({
      password: val,
    });
  }

  async handleRegister() {
    const {email, password, name} = this.state;
    try {
      const apiRegister = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        url:
          // 'http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/users/register',
          'https://be-kickin.herokuapp.com/api/v1/user/register',
        data: JSON.stringify({
          email,
          password,
          name
        }),
      });
      console.log('datanya', apiRegister.data.data);

      if (apiRegister.data.status) {
        console.log('masuk', apiRegister.data.status);
        this.props.FetchToken(apiRegister.data.data.token);
        console.log('masuk token', apiRegister.data.data.token);
        await AsyncStorage.setItem('@token', apiRegister.data.data.token)
        this.props.navigation.navigate('Profile', {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        });
      }
    } catch (e) {
      console.log(e.response.data.errors);
      ToastAndroid.show('Wrong input. Try again!', ToastAndroid.SHORT);
    }
  }

  render() {
    console.disableYellowBox = true
    return (
      <ScrollView>
        <ImageBackground
          source={require('../img/Background2.jpg')}
          style={styles.background}>
          <FormLogo />
          <Form style={styles.form}>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Email</Label>
              <Input
                style={styles.label}
                keyboardType="email-address"
                onChangeText={val => this.handleEmail(val)}
              />
            </Item>
            <Item floatingLabel last style={styles.item}>
              <Label style={styles.label}>Password</Label>
              <Input
                style={styles.label}
                secureTextEntry
                onChangeText={val => this.handlePassword(val)}
              />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Username</Label>
              <Input
                style={styles.label}
                onChangeText={val => this.handleUsername(val)}
              />
            </Item>
          </Form>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleRegister()}>
              <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}>Sudah punya akun?</Text>
            <TouchableOpacity
              >
              <Text 
                style={styles.signupButton}
                onPress={() => this.props.navigation.navigate('Details')}> 
                Masuk
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    width: 300,
    backgroundColor: '#57BC90',
    borderRadius: 25,
    marginVertical: 5,
    marginTop: 30,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  form: {
    justifyContent: 'center',
    width: '70%',
    marginLeft: 50,
  },
  label: {
    color: 'white',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#015249',
  },
});

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    // FetchToken is the name our created at this time
    FetchToken: token => {
      console.log('Ini FetchToken di Register', token);
      dispatch(auth(token))
      console.log('Ini dispatch auth di Register', dispatch(auth(token)));
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(Register);
