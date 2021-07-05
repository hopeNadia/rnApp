import auth from '@react-native-firebase/auth';
import React from 'react';
import {Alert} from 'react-native';
import * as Yup from 'yup';

import routes from '../../routes';
import {useCurrentUser} from '../../user';
import BaseAuthForm from '../components/baseForm';
import {defaultErrorMessage, errorCodes} from '../constants';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8).required('Required'),
});

const SignupContainer = ({navigation}) => {
  const {setUser} = useCurrentUser();

  const onSubmit = async ({email, password}) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      setUser(response.user._user);
      navigation.navigate(routes.app);

      console.log('User account created & signed in!', response);
    } catch (error) {
      const errorMessage = errorCodes[error.code] || defaultErrorMessage;
      Alert.alert(null, errorMessage);
    }
  };

  return <BaseAuthForm onSubmit={onSubmit} validationSchema={SignupSchema} />;
};

export default SignupContainer;
