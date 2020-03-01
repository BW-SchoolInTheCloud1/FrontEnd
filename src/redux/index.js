import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
   GET_TASKS,
   GET_SENIORS_LIST, 
   POST_NEW_SENIOR, 
   POST_NEW_STUDENT, 
   ASSIGN_NEW_TASK, 
   SET_ERROR,
   PREPARE_DATA } from './actions'

const initialState = {
   seniors: [],
   tasks: [{
      title: 'test',
      description: 'test from global state',
      volunteer_id: 999
   }],
   error: '',
   isFetching: false
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_SENIORS_LIST:
         return {
            ...state,
            isFetching: false
         }
      case POST_NEW_SENIOR:
         return {
            ...state,
            isFetching: false
         }
      case POST_NEW_STUDENT:
         return {
            ...state,
            isFetching: false
         }
      case SET_ERROR:
         return {
            ...state,
            error: action.payload,
            isFetching: false
         }
      case GET_TASKS:
         return {
            ...state,
            tasks: action.payload,
            isFetching: false
         }
      case ASSIGN_NEW_TASK:
         return {
            ...state,
            isFetching: false
         }
      case PREPARE_DATA: 
         return {
            ...state,
            isFetching: true,
            tasks: []
         }
      default: return state
   } 
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log("THIS IS THE STORE!",store.getState()))
export default store