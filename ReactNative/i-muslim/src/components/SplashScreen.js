import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

class SplashScreen extends Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      // this.props.navigation.navigate("Login");
      this.props.navigation.navigate("Home");
    }
  }

  render() {
    return (
      <LinearGradient
        colors={["#65D4F9", "#3BD1DC", "#4DEBD0"]}
        style={styles.linearGradient}
        useAngle={true}
        angle={-45}
        angleCenter={{ x: 0.5, y: 0.5}}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/logo_imuslim_with_text.png')} style={{ width: 170, height: 70 }} />
        </View>
      </LinearGradient>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});

export default SplashScreen;
