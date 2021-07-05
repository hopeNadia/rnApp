import React from 'react';
import {StyleSheet} from 'react-native';
import {View, FlatList, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';

const ChatBotComponent = ({messages, setText, onSendMessage}) => {
  const renderMessage = ({item}) => {
    console.warn('render item', item);
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>{item.text}</Text>
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
      <Input placeholder="Message" onChangeText={value => setText(value)} />
      <Button title={'Send'} onPress={onSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatBotComponent;
