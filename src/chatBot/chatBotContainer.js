import React, {useEffect, useState} from 'react';
import {Dialogflow_V2} from 'react-native-dialogflow';

import {useCurrentUser} from '../user/userContext';
import dialogflowConfig from'./config';
import ChatBotComponent from './chatBotComponents';

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

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_ENGLISH_US,
        dialogflowConfig.project_id
      );
  }, []);

  const onSendMessage = (text) => {
    const newMessage = {
      text: text,
      sender: user,
      createdOn: new Date(),
      id: Math.random().toString(36).substr(2, 9)
    }

    setMessages([...messages,newMessage ]);

    Dialogflow_V2.requestQuery(
      text,
      result => handleGoogleResponse(result),
      error => console.log(error),
    );
  }

  const handleGoogleResponse = useCallback(result => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];

    const newMessage = {
      text: text,
      sender: botUser,
      createdOn: new Date(),
      id: Math.random().toString(36).substr(2, 9)
    }

    setMessages([...messages,newMessage ]);
  },[messages])

  console.log('user', user);

  return <ChatBotComponent messaages={messages} onSendMessage={onSendMessage} />;
};

export default ChatBotContainer;
