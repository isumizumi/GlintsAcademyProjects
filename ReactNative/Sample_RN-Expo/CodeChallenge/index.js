import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcome to Code Challenge</Text>
      </View>
    );
  }
}
