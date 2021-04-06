import React from 'react';
import {useCurrentUser} from './userContext';
import {View, Image, Button, Text} from 'react-native';
import routes from '../routes';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const User = ({user, updateUser}) => {
  return (
    <View>
      <Image source={{uri: user.photoURL}} style={{width: 100, height: 100}} />
      <Text>Name: {user.displayName}</Text>
      <Text>Email: {user.email}</Text>

      <Button title={'Update user profile'} onPress={updateUser} />
    </View>
  );
};
const UserContainer = () => {
  const {user, setUser} = useCurrentUser();

  const updateUser = async () => {
    console.log(auth().User);
    const response = await auth().currentUser.updateProfile({
      displayName: 'test user 3',
      photoURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png',
    });

    const newUser = auth().currentUser;

    setUser(newUser);

    console.log('response', response);
  };

  console.log('user', user);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.userProfile}
        component={() => <User user={user} updateUser={updateUser} />}
      />
    </Stack.Navigator>
  );
};

export default UserContainer;
