import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'


import Navigator from "./navigator"


const config = {
  screens: {
    Chat: 'chat',
    Camera: 'camera',
  },
};

const linking = {
  prefixes: ['https://www.mirocosic.com/seen', 'seen://'],
  config,
};



export default () => {
  return (
    <NavigationContainer linking={linking} theme={DarkTheme}>
      <Navigator />
    </NavigationContainer>
  )
}