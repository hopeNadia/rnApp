import React from 'react';
import {StyleSheet} from 'react-native';
import {View, FlatList, Text} from 'react-native';
import {Input, Icon, Avatar} from 'react-native-elements';

const ChatBotComponent = ({messages, text, setText, onSendMessage}) => {
  const renderMessage = ({item}) => {
    let sourceProp = item.sender.photoURL ? {uri: item.sender.photoURL} : null;

    return (
      <View style={styles.messageContainer}>
        <View>
          <Avatar
            rounded
            source={sourceProp}
            icon={{
              name: 'account',
              type: 'material-community',
              color: '#292929',
              size: 30,
            }}
          />
          <Text style={styles.userNameText}>
            {item.sender.displayName || item.sender.email}
          </Text>
        </View>

        <View style={styles.messageTextContainer}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
      />
      <Input
        value={text}
        placeholder="Message"
        onChangeText={value => setText(value)}
        rightIcon={
          <Icon name="send" type="material-community" onPress={onSendMessage} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  messageTextContainer: {
    backgroundColor: '#c9c9c9',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 20,
  },
  messageText: {
    fontSize: 17,
    color: '#363636',
  },
  userNameText: {
    fontSize: 10,
    color: '#292929',
  },
});

export default ChatBotComponent;
