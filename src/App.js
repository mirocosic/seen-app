import React from 'react';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'


import Navigator from "./navigator"
import {store, persistor } from "./store"

const config = {
  screens: {
    Chat: 'chat',
    Camera: 'camera',
  },
};

const linking = {
  prefixes: ['https://www.mirocosic.com/seen', 'seen://'],
  config,
}

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer linking={linking} theme={DarkTheme}>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}