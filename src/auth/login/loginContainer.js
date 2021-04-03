import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {Formik} from 'formik';

const LoginContainer = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.warn(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              name="email"
              placeholder="Email"
              style={styles.input}
              onChangeText={handleChange('email')}
              value={values.email}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={handleChange('password')}
              value={values.password}
            />
          </View>
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D9D5DC',
    marginBottom: 10,
    maxHeight: 50,
  },
  input: {
    flex: 1,
    color: 'rgba(0, 0, 0, 1)',
  },
});

export default LoginContainer;
