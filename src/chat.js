import React, { useState, useCallback, useEffect } from 'react'
import { TouchableOpacity, LayoutAnimation, View, SafeAreaView, Text, Image, UIManager } from "react-native"
import { connect } from "react-redux"
import { GiftedChat, Bubble, Avatar } from 'react-native-gifted-chat'
import * as Animatable from 'react-native-animatable';
import check from "../assets/check.png"
import back from "../assets/back.png"
import more from "../assets/more.png"


if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Chat = ({threads, route, navigation, showNextMessage}) => {
  const [messages, setMessages] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [isTyping, setIsTyping] = useState(false)
  const [isGroupChat, setIsGroupChat] = useState(false)
  const [title, setTitle] = useState("")

  // initial messages set
  useEffect(() => {
 
    setMessages(
      threads
      .find(t => t.id === route?.params?.id)
      .messages
      .filter(m => m?.visible)
      .reverse()
      )

    if (threads.find(t => t.id === route?.params?.id).isGroupChat) {
      setIsGroupChat(true)
    }

    const chatTitle = threads.find(t => t.id === route?.params?.id).title

    if (chatTitle) {
      setTitle(chatTitle)
    }
    
  }, [threads])

  useEffect(() => {
    const ref = setTimeout(() => {
      const thread = threads.find(t => t.id === route?.params?.id)
      const msg = thread.messages.find(m => m.enabled && !m.visible)

      if (msg) {
        // wait before displaying message
        console.log(msg?.user)
        setCurrentUser(msg?.user)
        setIsTyping(true)
        setTimeout(() => {
          showNextMessage(thread.id, msg._id)
          setIsTyping(false)
        }, msg.delay)
        
      } else {
        console.log("no msg found")
      }

      
    }, Math.floor(Math.random() * 1000) + 1000)
    return () => clearTimeout(ref)
  }, [threads])

  return (
    <SafeAreaView style={{flex: 1 , backgroundColor: "#002040"}}>
      <View style={{height: 50, paddingHorizontal: 16, alignItems: "center", flexDirection: "row", justifyContent:"space-between"}}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{paddingVertical: 10, paddingRight: 10, flexDirection: "row", alignItems: "center"}}>
          <Image source={back} style={{width: 12, height: 20, marginRight: 20}}/>
          <Text style={{color: "white", fontSize: 20, fontWeight: "bold"}}>{title}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Info")} style={{flexDirection: "row"}}>
          <View style={{width: 38, height: 38, borderRadius: 6, backgroundColor: "#173B5F", alignItems: "center", justifyContent: "center"}}>
            <Image source={more} style={{width: 4, height: 20}}/>
          </View>
        </TouchableOpacity>

      </View>
      
      <GiftedChat
        isTyping={isTyping}
        messagesContainerStyle={{ backgroundColor:"#030E1E", paddingBottom: 0}}
        messages={messages}
        parsePatterns={(linkStyle) => [
          { pattern: /@(\w+)/, style: { ...linkStyle, color: "blue" }},
        ]}

        showUserAvatar={false}
        renderUsernameOnMessage={isGroupChat}
        renderAvatar={null}
        renderBubble={props => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
          
          return (
          <Animatable.View 
            animation="fadeInUp" duration={400} delay={50}
            style={{paddingVertical: 5, paddingHorizontal: 5}}>
            
            <Bubble {...props} 
              textStyle={{
                right: {
                  color: '#030E1E'
                },
                left: {
                  color: '#030E1E'
                }
              }}
              wrapperStyle={{
                left: {
                  padding: 4,
                  backgroundColor: "white",
                  borderRadius: 0,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  borderLeftColor: "#D2298D",
                  borderLeftWidth: 4,
                },
                right: {
                  padding: 4,
                  backgroundColor: "white",
                  borderRadius: 0,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderRightColor: "#3EC4EF",
                  borderRightWidth: 4,
                }
              }}
              
            />
          </Animatable.View>)
          }}
        
        
        renderTicks={props => {
          return null

          //disabled for now
          if (!isGroupChat) {
            return (
              <View>
                <Image source={check} style={{width: 10, height: 8}} />
              </View>
            )
          } else {
            return null
          }
        }}

        renderFooter={props => {

          if (isTyping) {
            return (
              <View style={{height: 25, marginHorizontal: 15}}>
                <Text style={{color: "white", textAlign: currentUser._id === 1 ? "right" : "left"}}>
                  {currentUser.name} is typing...
                  </Text>
              </View>)
          } else { return null }
          

        }}

        renderInputToolbar={props => <View style={{backgroundColor: "white", padding: 0}}/>}
        renderComposer={props => <View style={{backgroundColor: "white", padding: 0}}/> }
        renderAccessory={props => <View style={{backgroundColor: "white", padding: 0}}/> }
        minInputToolbarHeight={0}

        user={{
          _id: 1
        }}
      />
    </SafeAreaView>
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
