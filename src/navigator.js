import React from "react"
import { Image, TouchableOpacity } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from "./chat"
import Threads from "./threads"
import Camera from "./camera"
import Home from "./home"
import Dev from "./dev"
import Info from "./info"
import scan from "../assets/scan.png"
import chats from "../assets/chats.png"

const Tab = createBottomTabNavigator()
const Chat = createStackNavigator()

const ChatStack = () => {
  return (
    <Chat.Navigator>
      <Chat.Screen name="Chats" component={Threads} options={{headerShown: false}}/>
      <Chat.Screen name="Chat" component={ChatScreen} options={{headerShown: false}}/>
      <Chat.Screen name="Home" component={Home} />
      <Chat.Screen name="Dev" component={Dev} />
      <Chat.Screen name="Info" component={Info} options={{headerShown: false}} />
    </Chat.Navigator>
  )
}


const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#9AA8C9",
        tabBarStyle: {backgroundColor: '#002040', padding: 10, height: 100, paddingBottom: 20},
        tabBarLabelStyle: {fontSize: 14, fontWeight: "600"},
        tabBarButton: props => (
        <TouchableOpacity {...props}
          style={{backgroundColor: props.accessibilityState.selected ? "#D2298D" : "#002040", flex: 1, padding: 5, marginHorizontal: 10, borderRadius: 10}}>
        </TouchableOpacity>),
        
      }}
      >
      <Tab.Screen name="Skeniraj kod" component={Camera} 
        options={{
          tabBarIcon: ({color}) => (<Image source={scan} style={{width: 25, height: 25, tintColor: color}} />),
          headerShown: false,
        }}/>
      <Tab.Screen name="Razgovori" component={ChatStack}
        options={{
          tabBarIcon: ({color}) => (<Image source={chats} style={{width: 27, height: 25, tintColor: color}} />),
          headerShown: false,
          }}
        />
    </Tab.Navigator>
  );
}

export default Main;