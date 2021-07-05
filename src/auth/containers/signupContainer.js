import React from 'react';
import {Alert} from 'react-native';
import * as Yup from 'yup';

import routes from '../../routes';
import {createUserWithEmailAndPassword} from '../../servicies/authentication';
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
      const {user} = await createUserWithEmailAndPassword(email, password);

      setUser(user);

      navigation.navigate(routes.app);
    } catch (error) {
      const errorMessage = errorCodes[error.code] || defaultErrorMessage;
      Alert.alert(null, errorMessage);
    }
  };

  return <BaseAuthForm onSubmit={onSubmit} validationSchema={SignupSchema} />;
};

export default SignupContainer;
