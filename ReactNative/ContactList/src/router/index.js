import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Profile, ContactList} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../components';
import {IconContactActive, IconProfileActive} from '../assets/icon';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    // <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
    <Tab.Navigator>
      <Tab.Screen
        name="Contact"
        component={ContactList}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: () => <IconContactActive />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <IconProfileActive />,
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
