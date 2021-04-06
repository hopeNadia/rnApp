import React, {useEffect, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import HomeScreen from '../home/homeContainer';
import LoginScreen from '../auth/login/loginContainer';
import SignupScreen from '../auth/sugnup/signupContainer';
import UserScreen from '../user/userContainer';
import routes from '../routes';
import {useCurrentUser} from '../user/userContext';

const Stack = createStackNavigator();

const AuthStack = () => {
  const {setUser} = useCurrentUser();

  const onAuthStateChanged = useCallback(
    authUser => {
      setUser(authUser);
    },
    [setUser],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.home} component={HomeScreen} />
      <Stack.Screen name={routes.signin} component={LoginScreen} />
      <Stack.Screen name={routes.signup} component={SignupScreen} />
      <Stack.Screen
        name={routes.app}
        component={UserScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
