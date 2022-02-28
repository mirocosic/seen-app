import React, { useState, useCallback, useEffect } from 'react'
import { connect } from "react-redux"
import { GiftedChat } from 'react-native-gifted-chat'

const Chat = ({threads, route}) => {
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

  // initial messages set
  useEffect(() => {
    setMessages(threads.find(t => t.id === route?.params?.id).messages)
  }, [threads])

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

export default connect(
  state => ({
    threads: state.threads
  }),
  null
)(Chat)
