import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import routes from '../routes';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title={'Sign In'}
        onPress={() => {
          navigation.navigate(routes.signin);
        }}
      />
      <Button
        title={'Sign Up'}
        onPress={() => {
          navigation.navigate(routes.signup);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default HomeScreen;
