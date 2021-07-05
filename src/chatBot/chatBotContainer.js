import React, {useEffect, useCallback, useState} from 'react';
import {Dialogflow_V2} from 'react-native-dialogflow';

import {useCurrentUser} from '../user/userContext';

import ChatBotComponent from './chatBotComponents';
import dialogflowConfig from './config';

const botUser = {
  photoURL: '',
  displayName: 'Bot user',
  email: 'botUser@harakirimail.com',
};

const defaultMessage = {
  sender: botUser,
  text: 'Default message',
  id: 0,
  createdOn: new Date(),
};

const ChatBotContainer = () => {
  const {user} = useCurrentUser();
  const [messages, setMessages] = useState([defaultMessage]);
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

  const onSendMessage = () => {
    const newMessage = {
      text: text,
      sender: user,
      createdOn: new Date(),
      id: Math.random().toString(36).substr(2, 9),
    };

    setMessages([...messages, newMessage]);

    try {
      Dialogflow_V2.requestQuery(
        text,
        result => handleGoogleResponse(result),
        error => console.log('Dialog error', error),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleGoogleResponse = useCallback(
    result => {
      console.log('Query result ', result);
      let text = result?.queryResult?.fulfillmentMessages[0].text.text[0];

      const newMessage = {
        text: text,
        sender: botUser,
        createdOn: new Date(),
        id: Math.random().toString(36).substr(2, 9),
      };

      setMessages([...messages, newMessage]);
    },
    [messages],
  );

  return (
    <ChatBotComponent
      messaages={messages}
      setText={setText}
      onSendMessage={onSendMessage}
    />
  );
};

export default ChatBotContainer;
