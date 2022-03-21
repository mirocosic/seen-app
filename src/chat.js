import React, { useState, useCallback, useEffect } from 'react'
import { LayoutAnimation } from "react-native"
import { connect } from "react-redux"
import { GiftedChat } from 'react-native-gifted-chat'

const Chat = ({threads, route, showNextMessage}) => {
  const [messages, setMessages] = useState([]);

  // initial messages set
  useEffect(() => {
    setMessages(
      threads
      .find(t => t.id === route?.params?.id)
      .messages
      .filter(m => m?.visible)
      )
  }, [threads])

  useEffect(() => {
    const ref = setInterval(() => {
      const thread = threads.find(t => t.id === route?.params?.id)
      const msg = thread.messages.find(m => !m.visible)
      if (msg) { showNextMessage(thread.id, msg._id) } else {}
      
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      //console.log("Showing message: ", msg)
    }, Math.floor(Math.random() * 1000) + 500)
    return () => clearInterval(ref)
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
  dispatch => ({
    showNextMessage: (threadId, msgId) => dispatch({type: "SHOW_NEXT_MESSAGE", threadId, msgId})
  })
)(Chat)
