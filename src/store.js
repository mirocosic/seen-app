import { createStore, combineReducers } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import threads from "./threads"

const john = {
  _id: 1,
  name: 'John',
  avatar: 'https://placeimg.com/140/140/animals',
}

const kelly = {
  _id: 2,
  name: 'Kelly',
  avatar: 'https://placeimg.com/140/140/people',
}


const initialState = {
  //ordered by our story order
  qrCodes: [
    {
      id: "genesysCode",
      scanned: true
    },
    {
      id: "first",
      threadId: 1,
      groupId: 1,
      scanned: false,
    },
    {
      id: "second",
      threadId: 1,
      groupId: 2,
      scanned: false,
    }
  ],
  threads: [
    {id: 1,
      visible: false,
      title: "Jake Johnson", subtitle: "An excerpt from last message received...",
      messages: [
        {
          _id: 1,
          groupId: 1,
          visible: false,
          enabled: false,
          text: 'Hey John!',
          createdAt: new Date(Date.now() + 1*60*1000),
          user: kelly,
        },
        {
          _id: 2,
          groupId: 1,
          visible: false,
          enabled: false,
          text: 'Hi Kelly...',
          createdAt: new Date(Date.now() + 2*60*1000),
          user: john,
        },
        {
          _id: 3,
          groupId: 1,
          visible: false,
          enabled: false,
          text: 'How are you?',
          createdAt: new Date(Date.now() + 3*60*1000),
          user: kelly,
        },
        {
          _id: 4,
          groupId: 2,
          visible: false,
          enabled: false,
          text: 'Not so good...',
          createdAt: new Date(Date.now() + 4*60*1000),
          user: john,
        },
        {
          _id: 5,
          groupId: 2,
          visible: false,
          enabled: false,
          text: 'Why? What happened?',
          createdAt: new Date(Date.now() + 5*60*1000),
          user: kelly,
        },
        {
          _id: 6,
          groupId: 2,
          visible: false,
          enabled: false,
          text: 'I just met her again... She didn\'t say hi. ',
          createdAt: new Date(Date.now() + 6*60*1000),
          user: john,
        },
        {
          _id: 7,
          groupId: 2,
          visible: false,
          enabled: false,
          text: 'Bummer.',
          createdAt: new Date(Date.now() + 7*60*1000),
          user: kelly,
        },
      ]},
    {id: 2,
      visible: false,
      title: "Some group title", subtitle: "An excerpt from last message received...",
      messages: [
        {
          _id: 1,
          visible: false,
          text: 'Hey Miro!',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 2,
          visible: false,
          text: 'Hi Kelly',
          createdAt: new Date(),
          user: john,
        },
      ]},
    {id: 3,
      visible: false,
      title: "A private conversation", subtitle: "An excerpt from last message received...",
      messages: [
        {
          _id: 1,
          visible: false,
          text: 'Hey Miro!',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 2,
          visible: false,
          text: 'Hi Cat',
          createdAt: new Date(),
          user: john,
        },
        {
          _id: 3,
          visible: false,
          text: 'Good day?',
          createdAt: new Date(),
          user: kelly,
        },
      ]},
    {id: 4,
      visible: false,
      title: "John Doe", subtitle: "An excerpt from last message received...",
      messages: [
        {
          _id: 1,
          visible: false,
          text: 'Hey Miro!',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 2,
          visible: false,
          text: 'Hi Kelly',
          createdAt: new Date(),
          user: john,
        },
        {
          _id: 3,
          visible: false,
          text: 'How are you?',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 4,
          visible: false,
          text: 'How are you?',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 5,
          visible: false,
          text: 'How are you?',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 6,
          visible: false,
          text: 'How are you?',
          createdAt: new Date(),
          user: kelly,
        },
      ]},
    {id: 5,
      visible: false,
      title: "Jane Smith", subtitle: "An excerpt from last message received...",
      messages: [{
        _id: 1,
        visible: false,
        text: 'How are you?',
        createdAt: new Date(),
        user: kelly,
      },
      {
        _id: 2,
        visible: false,
        text: 'I\'m good',
        createdAt: new Date(),
        user: john,
      }]},
  ]
}

const reducers = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_NUMBER":
      return {
        ...state,
        count: state.count + action.number,
      }

    case "MARK_CODE_SCANNED":
      return {
        ...state,
        qrCodes: state.qrCodes.map(c => c.id === action.codeId ? {...c, scanned: true} : c),
        threads: state.threads.map(thread => thread.id === action.threadId ? 
          {...thread, 
           visible: true,
           messages: thread.messages.map(msg => msg.groupId === action.groupId ? {...msg, enabled: true} : msg)
          } 
          : thread)
      }

    case "SHOW_NEXT_MESSAGE":
      return {
        ...state,
        threads: state.threads.map(
          thread => thread.id === action.threadId ?
            {...thread,
              messages: thread.messages.map(msg => msg._id === action.msgId ? {...msg, visible: true} : msg)
            }
            : thread
        )
      }

    case "RESET_STATE":
      return initialState

    default:
      return state

}}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
