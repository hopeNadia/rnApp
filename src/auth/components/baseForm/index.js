import {Formik} from 'formik';
import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

const BaseFormComponent = ({onSubmit, validationSchema}) => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({handleChange, handleBlur, handleSubmit, errors, touched, values}) => (
        <View style={styles.formContainer}>
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <View style={styles.inputContainer}>
            <TextInput
              name="email"
              placeholder="Email"
              style={styles.input}
              onChangeText={handleChange('email')}
              value={values.email}
            />
          </View>
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
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
          <Button
            onPress={handleSubmit}
            title="Submit"
            containerStyle={styles.button}
          />
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
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D9D5DC',
  },
  input: {
    flex: 1,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    color: 'rgba(0, 0, 0, 1)',
    height: 50,
  },
  errorText: {
    color: 'red',
  },
  button: {
    margin: 20,
  },
});

export default BaseFormComponent;
