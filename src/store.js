import { createStore, combineReducers } from "redux";

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
      title: "Jake Johnson", subtitle: "An excerpt from last message received...",
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
      ]},
    {id: 2, title: "Some group titley", subtitle: "An excerpt from last message received...",
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
    {id: 3, title: "A private conversation", subtitle: "An excerpt from last message received...",
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
    {id: 4, title: "John Doe", subtitle: "An excerpt from last message received...",
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
    {id: 5, title: "Jane Smith", subtitle: "An excerpt from last message received...",
      messages: [{
        _id: 1,
        text: 'How are you?',
        createdAt: new Date(),
        user: kelly,
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
    default:
      return state

}}

export default store = createStore(reducers)