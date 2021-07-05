import React, {useState} from 'react';
import {Alert} from 'react-native';

import {
  getAuthCurrentUser,
  updateUserProfile,
} from '../servicies/authentication';

import UserComponent from './userComponent';
import {useCurrentUser} from './userContext';

const UserContainer = () => {
  const {user, setUser} = useCurrentUser();
  const [userName, setUserName] = useState(user?.displayName);

  const updateUser = async () => {
    try {
      await updateUserProfile({
        userName,
        // photoURL:
        //   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png',
      });

      const newUser = getAuthCurrentUser();

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
