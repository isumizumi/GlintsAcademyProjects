import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginDetail from './src/components/LoginDetail';
import Register from './src/components/Register';
import Profile from './src/components/Profile';
import HomeScreen from './src/components/Home';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'

//const store = createStore(IndexReducer);
import { configureStore, persistor } from './src/redux/store';
const storing = configureStore();

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: LoginDetail,
    Profile: Profile,
    Register: Register,
    Todo: TodoInput,
    List: TodoList,
  },
  {
    initialRouteName: 'Details',
    // headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <Provider store={storing}>
        <PersistGate 
          loading={null}
          persistor={persistor}
        >
        <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
