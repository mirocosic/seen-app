import React from "react"
import { Image } from "react-native"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons  } from "@expo/vector-icons"
import Chat from "./chat"
import Camera from "./camera"
import camera from "../assets/camera.png"

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="white"
      inactiveColor="#c9c9c9">
      <Tab.Screen name="Camera" component={Camera} 
        options={{tabBarIcon: ({color}) => (<Ionicons name="md-camera-outline" size={26} color={color} />)}}/>
      <Tab.Screen name="Chat" component={Chat} 
        options={{tabBarIcon: ({color}) => (<Ionicons name="chatbubbles-outline" size={26} color={color} />)}}/>
    </Tab.Navigator>
  );
}