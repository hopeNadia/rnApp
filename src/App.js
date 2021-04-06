import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {UserProvider} from './user/userContext';
import App from './app';

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
