import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Text,
  Body,
  Button,
  Toast,
  Right
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLogin } from "../redux/action/auth";
import AsyncStorage from "@react-native-community/async-storage";
import LinearGradient from "react-native-linear-gradient";

const BLUE = "#428AF8";
const LIGHT_GRAY = "D3D3D3";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      // email:"",
      password: ""
    };
  }
  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };

  componentWillUnmount() {
    console.log("username", this.state.username);
    // console.log("email", this.state.email);
    console.log("password", this.state.password);
    console.log("token", this.props.auth);
  }
  componentDidMount() {
    //console.log('token', this.props.auth)
    this.handleLogin();
  }
  componentDidUpdate() {
    //console.log('token', this.props.auth)
    this.handleLogin();
  }

  handleLogin = () => {
    if (this.props.auth.token) {
      this.props.navigation.navigate("Home");
    }
  };
  handleSubmit() {
    fetch(
      "http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/auth/",
      // "https://be-kickin.herokuapp.com/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          // email: this.state.email,
          password: this.state.password
        })
      }
    )
      .then(response => response.json())
      .then(result => {
        console.log("hajar", result.token);
        if (result.success) {
          this.props.PostLogin(result.token);
          AsyncStorage.setItem("@token", result.token);
        } else {
          Toast.show({
            text: "Wrong password!",
            buttonText: "Okay",
            type: "danger"
          });
        }
      });
  }

  render() {
    return (
      <LinearGradient
        colors={["#65D4F9", "#3BD1DC", "#4DEBD0"]}
        style={styles.linearGradient}
        useAngle={true}
        angle={-45}
        angleCenter={{ x: 0.5, y: 0.5 }}
      >
        <Container style={styles.logoLogin}>
          <Content>
                <Image
                  source={require("../assets/logo_imuslim_with_text.png")}
                  style={{ width: 170, height: 70, alignSelf: "center", flex:1 }}
                />
              <Container style={styles.formLogin}>
                <Form>
                  <Item style={styles.inputText}>
                    <Input
                      placeholder="Username"
                      onChangeText={username =>
                        this.setState({ username: username })
                      }
                    />
                  </Item>
                  <Item style={styles.inputText}>
                    <Input
                      placeholder="Password"
                      secureTextEntry={true}
                      onChangeText={password =>
                        this.setState({ password: password })
                      }
                    />
                  </Item>
                </Form>
                <Button
                  rounded
                  info
                  style={styles.buttonLogin}
                  onPress={() => this.handleSubmit()}
                >
                  <Text style={styles.loginText}>Login</Text>
                </Button>
                <Text style={styles.label}>Forgot password?</Text>
                <View style={styles.signupContainer}>
                  <Text style={styles.signuplabel}>Not a member?</Text>
                  <Text
                    style={styles.textSignup}
                    onPress={() => this.props.navigation.navigate("Signup")}
                  >
                    Join Today !
                  </Text>
                </View>
              </Container>
          </Content>
        </Container>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  logoLogin: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingTop:120,
    width: "100%",
    height: "100%",
  },
  formLogin: {
    flex: 2,
    borderRadius: 20,
    width:"100%",
    height: "100%",
    justifyContent: "center",
    padding: 10
  },
  buttonLogin: {
    marginHorizontal: 50,
    marginTop: 15,
    justifyContent: "center"
  },
  inputText: {
    width: "90%"
  },
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "center"
  },
  label: {
    color: "#ADAFAF",
    textAlign: "center",
    marginTop: 10
  },
  textSignup: {
    color: "#65D4F9",
    textAlign: "center",
    fontWeight: "bold"
  },
  signupContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  signupLabel: {
    color: "#ADAFAF",
    marginHorizontal: 9,
    marginTop: 10
  }
});

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    PostLogin: token => dispatch(getLogin(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
