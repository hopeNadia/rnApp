import React, {useEffect, useCallback, useState, useReducer} from 'react';
import {Dialogflow_V2} from 'react-native-dialogflow';

import {useCurrentUser} from '../user/userContext';

import ChatBotComponent from './chatBotComponents';
import dialogflowConfig from './config';

const botUser = {
  photoURL:
    'https://st3.depositphotos.com/8950810/17657/v/600/depositphotos_176577740-stock-illustration-cute-funny-white-robotchat-bot.jpg',
  displayName: 'Bot user',
  email: 'botUser@harakirimail.com',
};

const defaultMessage = {
  sender: botUser,
  text: 'Default message',
  id: 0,
  createdOn: new Date(),
};

const ActionType = {
  add: 'add',
};

const addMessageAction = message => ({
  type: ActionType.add,
  payload: message,
});

function messagesReducer(state, action) {
  switch (action.type) {
    case ActionType.add:
      return [...state, action.payload];
    default:
      break;
  }
}
const ChatBotContainer = () => {
  const {user} = useCurrentUser();
  const [messages, dispatchMessages] = useReducer(messagesReducer, [
    defaultMessage,
  ]);
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_ENGLISH_US,
        dialogflowConfig.project_id,
      );
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onSendMessage = useCallback(() => {
    const newMessage = {
      text: text,
      sender: user,
      createdOn: new Date(),
      id: Math.random().toString(36).substr(2, 9),
    };

    dispatchMessages(addMessageAction(newMessage));

    setText('');
    try {
      Dialogflow_V2.requestQuery(
        text,
        result => handleGoogleResponse(result),
        error => console.log('Dialog error', error),
      );
    } catch (e) {
      console.log(e);
    }
  }, [handleGoogleResponse, text, user]);

  const handleGoogleResponse = useCallback(result => {
    let queryText = result?.queryResult?.fulfillmentMessages[0].text?.text[0];

    const newMessage = {
      text: queryText,
      sender: botUser,
      createdOn: new Date(),
      id: Math.random().toString(36).substr(2, 9),
    };

    dispatchMessages(addMessageAction(newMessage));
  }, []);

  return (
    <ChatBotComponent
      text={text}
      messages={messages}
      setText={setText}
      onSendMessage={onSendMessage}
    />
  );
};

export default ChatBotContainer;
