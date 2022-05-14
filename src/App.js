import React from 'react';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';

import Navigator from "./navigator"
import {store, persistor } from "./store"

const config = {
  screens:{
    Razgovori: {
      screens: {
        Chats: "chats",
        Chat: "chat",
        Home: "home"
      }
    }
  }
}

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: "#030E1E",
  },
};

const linking = {
  prefixes: ['https://www.mirocosic.com/seen', "https://seen.fyi", "https://seenapp.net", 'seen://'],
  config,
}

export default () => {
  SplashScreen.preventAutoHideAsync()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer linking={linking} theme={MyTheme}>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}