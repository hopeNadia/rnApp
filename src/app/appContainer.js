import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../home';
import {
  AuthEvents,
  Login as LoginScreen,
  Signup as SignupScreen,
} from '../auth';
import routes from '../routes';
import BottomTabNavigation from '../bottomTabNavigation';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={routes.home}>
        <Stack.Screen name={routes.home} component={HomeScreen} />
        <Stack.Screen name={routes.signin} component={LoginScreen} />
        <Stack.Screen name={routes.signup} component={SignupScreen} />
        <Stack.Screen
          name={routes.app}
          component={BottomTabNavigation}
          options={{header: () => null}}
        />
      </Stack.Navigator>
      <AuthEvents />
    </>
  );
};

export default AppStack;
