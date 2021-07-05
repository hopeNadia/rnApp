import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Button, Input, ListItem} from 'react-native-elements';

const UserComponent = ({
  userEmail,
  phototurl,
  userName,
  updateUser,
  onChangeName,
}) => {
  return (
    <View style={styles.container}>
      <ListItem bottomDivider containerStyle={styles.imageContainer}>
        <Image source={{uri: phototurl}} style={styles.image} />
      </ListItem>

      <ListItem bottomDivider>
        <Text>Name:</Text>
        <Input
          placeholder="User name"
          value={userName}
          onChangeText={onChangeName}
        />
      </ListItem>

      <ListItem bottomDivider>
        <Text>Email: {userEmail}</Text>
      </ListItem>

      <Button
        containerStyle={styles.buttonContainer}
        title={'Update user profile'}
        onPress={updateUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    margin: 10,
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default UserComponent;
