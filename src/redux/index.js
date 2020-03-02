import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
   GET_TASKS,
   GET_SENIORS_LIST,  
   ASSIGN_NEW_TASK, 
   SET_ERROR,
   PREPARE_DATA } from './actions'

const initialState = {
   seniors: [],
   tasks: [{
      title: 'test from global state',
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
            seniors: action.payload,
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
            tasks: [
               ...state.tasks,
               action.payload
            ],
            isFetching: false
         }
      case PREPARE_DATA: 
         return {
            ...state,
            isFetching: true,
            tasks: [],
            seniors: [],
         }
      default: return state
   } 
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log("THIS IS THE STORE!",store.getState()))
export default store