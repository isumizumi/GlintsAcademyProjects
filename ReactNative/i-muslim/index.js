/**
 * @format
 */
// comment lagi
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
const store = configureStore();

const index = ()=>(
    <Provider store={store}>
        <App />
    </Provider>
)
    

AppRegistry.registerComponent(appName, () => index);
