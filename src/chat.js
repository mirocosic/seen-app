import React, { useState, useCallback, useEffect } from 'react'
import { LayoutAnimation, View } from "react-native"
import { connect } from "react-redux"
import { GiftedChat, Bubble, Avatar } from 'react-native-gifted-chat'

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
      const msg = thread.messages.find(m => m.enabled && !m.visible)
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
    <View style={{flex:1}}>
      <View style={{flex:0, backgroundColor: "white"}}/>
      <GiftedChat
        style={{flex:1, backgroundColor: "red", flex:1}}
        messagesContainerStyle={{justifyContent: "flex-end", paddingBottom: 10}}
        inverted={false}
        alignTop={true}
        messages={messages}
        onSend={messages => onSend(messages)}
        showUserAvatar
        renderBubble={props =>
          <View style={{paddingVertical: 10}}>
            <Bubble {...props} />
          </View>
          }
        
        renderAvatar={props =>
          <View style={{paddingVertical: 10}}>
            <Avatar {...props} />
          </View>
          }

        user={{
          _id: 1,
          avatar: 'https://placeimg.com/140/140/animals',
        }}
      />
    </View>
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
