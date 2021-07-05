import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import App from './app';
import {UserProvider} from './user';

const MyStack = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </UserProvider>
  );
};

export default MyStack;
