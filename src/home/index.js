import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import routes from '../routes';
import {useCurrentUser} from '../user';

const isEmpty = obj => {
  return Object.keys(obj).length === 0;
};

const HomeScreen = ({navigation}) => {
  const {user} = useCurrentUser();

  useEffect(() => {
    if (user && !isEmpty(user)) {
      navigation.replace(routes.app);
    }
  }, [user, navigation]);

  return (
    <View style={styles.container}>
      <Button
        containerStyle={styles.button}
        title={'Sign In'}
        onPress={() => {
          navigation.navigate(routes.signin);
        }}
      />
      <Button
        containerStyle={styles.button}
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
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
