import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
   GET_SENIORS_LIST, 
   POST_NEW_SENIOR, 
   POST_NEW_STUDENT, 
   POST_NEW_TASK, 
   SET_ERROR } from './actions';

const initialState = {
   seniors: []
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_SENIORS_LIST:
         return {
            ...state
         }
      case POST_NEW_SENIOR:
         return {
            ...state
         }
      case POST_NEW_STUDENT:
         return {
            ...state
         }
      case SET_ERROR:
         return {
            ...state
         }
      case POST_NEW_TASK:
         return {
            ...state
         }
      default: return state
   } 
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store