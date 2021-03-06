import auth from '@react-native-firebase/auth';
import React from 'react';
import {Alert} from 'react-native';
import * as Yup from 'yup';

import routes from '../../routes';
import {useCurrentUser} from '../../user';
import BaseAuthForm from '../components/baseForm';
import {defaultErrorMessage, errorCodes} from '../constants';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginContainer = ({navigation}) => {
  const {setUser} = useCurrentUser();

  const onSubmit = async ({email, password}) => {
    console.log('onSubmit', email, password);

    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      setUser(response.user._user);

      navigation.replace(routes.app);

      console.log('User signed in!', response.user._user, response);
    } catch (error) {
      const errorMessage = errorCodes[error.code] || defaultErrorMessage;
      Alert.alert(null, errorMessage);
    }
  };

  return <BaseAuthForm onSubmit={onSubmit} validationSchema={LoginSchema} />;
};

export default LoginContainer;
