import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default () => {
  const [messages, setMessages] = useState([]);

  const john = {
    _id: 1,
    name: 'John',
    avatar: 'https://placeimg.com/140/140/people',
  }

  const kelly = {
    _id: 2,
    name: 'Kelly',
    avatar: 'https://placeimg.com/140/140/people',
  }

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hey John!',
        createdAt: new Date(),
        user: kelly,
      },
      {
        _id: 2,
        text: 'Hi Kelly',
        createdAt: new Date(),
        user: john,
      },
      {
        _id: 3,
        text: 'How are you?',
        createdAt: new Date(),
        user: kelly,
      },
      
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      inverted
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
