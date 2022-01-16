import React from 'react';
import { Provider } from "react-redux"
import { NavigationContainer, DarkTheme } from '@react-navigation/native'


import Navigator from "./navigator"
import store from "./store"

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
    <Provider store={store}>
      <NavigationContainer linking={linking} theme={DarkTheme}>
        <Navigator />
      </NavigationContainer>
    </Provider>
  )
}