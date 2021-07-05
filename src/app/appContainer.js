import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {
  AuthEvents,
  Login as LoginScreen,
  Signup as SignupScreen,
} from '../auth';
import BottomTabNavigation from '../bottomTabNavigation';
import HomeScreen from '../home';
import routes from '../routes';

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
