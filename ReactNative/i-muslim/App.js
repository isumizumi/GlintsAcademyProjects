import React, { Component } from 'react';
import { Root, Icon, Button } from 'native-base';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store'
const store = configureStore();
import LoginScreen from './src/components/Login'
import Profiles from './src/components/Profile'
import Signup from './src/components/Signup'
import HomeList from './src/components/HomeList'
import addNewEvent from './src/components/AddNewEvent'
import EventItemScreen from './src/components/EventItem'
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator, TabBarBottom } from 'react-navigation';
import SplashScreen from './src/components/SplashScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeList,
    newEvent: addNewEvent,
    EventItem: EventItemScreen

  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profiles: Profiles,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Button transparent
              onPress={() => navigation.navigate('Home')}
              title="Home"
            >
              <Icon name="home" />
            </Button>
          )
        } else if (routeName === 'Profiles') {
          return (
            <Button transparent
              onPress={() => navigation.navigate('Profiles')}
              title="Profile"
            >
              <Icon name="contact" />
            </Button>
          )
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: '#21ADEE',
      inactiveTintColor: 'gray',
      labelStyle: { fontSize: 16 },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);

const MainNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Home: TabNavigator,
  Login: LoginScreen,
  Signup: Signup,
});


const App = createAppContainer(MainNavigator)
// without the style you will see a blank screen
export default () => (
  <Root>
    <View style={{ flex: 1 }}>
      <App />
    </View>
  </Root>);
