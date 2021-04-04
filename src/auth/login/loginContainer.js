import React from 'react';
import auth from '@react-native-firebase/auth';
import * as Yup from 'yup';

import {defaultErrorMessage, errorCodes} from '../constants';
import BaseAuthForm from '../baseForm';
import {Alert} from 'react-native';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginContainer = () => {
  const onSubmit = async ({email, password}) => {
    console.log('onSubmit', email, password);
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);

      console.log('User signed in!', response);
    } catch (error) {
      const errorMessage = errorCodes[error.code] || defaultErrorMessage;
      Alert.alert(null, errorMessage);
    }
  };

  return <BaseAuthForm onSubmit={onSubmit} validationSchema={LoginSchema} />;
};

export default LoginContainer;
