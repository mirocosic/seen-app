import React from "react"
import { Image } from "react-native"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons  } from "@expo/vector-icons"

import Chat from "./chat"
import Threads from "./threads"
import Camera from "./camera"
import camera from "../assets/camera.png"

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      inactiveColor="#c9c9c9">
      <Tab.Screen name="Scan" component={Camera} 
        options={{tabBarIcon: ({color}) => (<Ionicons name="md-camera-outline" size={26} color={color} />)}}/>
      <Tab.Screen name="Chats " component={Threads} 
        options={{tabBarIcon: ({color}) => (<Ionicons name="chatbubbles-outline" size={26} color={color} />)}}/>
    </Tab.Navigator>
  );
}


const ThreadsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Tabs} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}


export default ThreadsStack