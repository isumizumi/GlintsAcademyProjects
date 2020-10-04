import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

const MainApp = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
