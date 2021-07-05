import React from 'react';
import {StyleSheet} from 'react-native';
import {View, FlatList, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';

const ChatBotComponent = ({messages, onSendMessage}) => {
  const renderMessage = ({item}) => {
    return (
      <View>
        <Text>{item.text}</Text>
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
        placeholder="INPUT WITH ICON"
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
      />
      <Button title={'Send'} onPress={onSendMessage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatBotComponent;
