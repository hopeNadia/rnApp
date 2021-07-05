import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Alert} from 'react-native';

import UserComponent from './userComponent';
import {useCurrentUser} from './userContext';

const UserContainer = () => {
  const {user, setUser} = useCurrentUser();
  const [userName, setUserName] = useState(user?.displayName);

  const updateUser = async () => {
    try {
      await auth().currentUser.updateProfile({
        displayName: userName,
        // photoURL:
        //   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png',
      });

      const newUser = auth().currentUser;

      setUser(newUser);

      Alert.alert('Update succsefully');
    } catch (e) {
      Alert.alert('Something went wrong');
    }
  };

  const onChangeName = text => {
    setUserName(text);
  };

  return (
    <UserComponent
      updateUser={updateUser}
      userName={userName}
      userEmail={user?.email}
      phototurl={user?.photoURL}
      onChangeName={onChangeName}
    />
  );
};

export default UserContainer;
