import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './home/homeContainer';
import LoginScreen from './auth/login/loginContainer';
import routes from './routes';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.home} component={HomeScreen} />
        <Stack.Screen name={routes.login} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
