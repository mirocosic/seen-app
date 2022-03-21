import { createStore, combineReducers } from "redux";
import threads from "./threads";

const john = {
  _id: 1,
  name: 'John',
  avatar: 'https://placeimg.com/140/140/people',
}

const kelly = {
  _id: 2,
  name: 'Kelly',
  avatar: 'https://placeimg.com/140/140/people',
}


const initialState = {
  count: 0,
  threads: [
    {id: 1,
      visible: true,
      title: "Jake Johnson", subtitle: "An excerpt from last message received...",
      messages: [
        {
          _id: 1,
          visible: true,
          text: 'Hey Miro!',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 2,
          visible: true,
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
      ]},
    {id: 2,
      visible: false,
      title: "Some group titley", subtitle: "An excerpt from last message received...",
      messages: [
        {
          _id: 1,
          text: 'Hey Miro!',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 2,
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
          text: 'Hey Miro!',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 2,
          text: 'Hi Cat',
          createdAt: new Date(),
          user: john,
        },
        {
          _id: 3,
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
          text: 'Hey Miro!',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 2,
          text: 'Hi Kelly',
          createdAt: new Date(),
          user: john,
        },
        {
          _id: 3,
          text: 'How are you?',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 4,
          text: 'How are you?',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 5,
          text: 'How are you?',
          createdAt: new Date(),
          user: kelly,
        },
        {
          _id: 6,
          text: 'How are you?',
          createdAt: new Date(),
          user: kelly,
        },
      ]},
    {id: 5,
      code: "miro",
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

    case "MAKE_THREAD_VISIBLE":
      return {
        ...state,
        threads: state.threads.map(thread => thread.code === action.code ? {...thread, visible: true} : thread)
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
    default:
      return state

}}

export default store = createStore(reducers)