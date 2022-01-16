import { createStore, combineReducers } from "redux";


const initialState = {
  count: 0,
  threads: [
    {id: 1,
      title: "Jake Johnson", subtitle: "An excerpt from last message received...",
      messages: []},
    {id: 2, title: "Some group titley", subtitle: "An excerpt from last message received...",
      messages: []},
    {id: 3, title: "A private conversation", subtitle: "An excerpt from last message received...",
      messages: []},
    {id: 4, title: "John Doe", subtitle: "An excerpt from last message received...",
      messages: []},
    {id: 5, title: "Jane Smith", subtitle: "An excerpt from last message received...",
      messages: []},
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