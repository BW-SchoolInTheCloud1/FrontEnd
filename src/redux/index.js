import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
   GET_TASKS,
   GET_TASK_DATA,
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
   taskData: {
      title: '',
      description: '',
      volunteer_id: ''
   },
   error: '',
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_SENIORS_LIST:
         return {
            ...state,
            seniors: action.payload,
            
         }
      case SET_ERROR:
         return {
            ...state,
            error: action.payload,
            
         }
      case GET_TASKS:
         return {
            ...state,
            tasks: action.payload,
            
         }
      case ASSIGN_NEW_TASK:
         return {
            ...state,
            tasks: [
               ...state.tasks,
               action.payload
            ],
            
         }
      case GET_TASK_DATA:
         return {
            ...state,
            taskData: action.payload
         }
      case PREPARE_DATA: 
         return {
            ...state,
            tasks: [],
            taskDate: [],
            seniors: [],
         }
      default: return state
   } 
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log("THIS IS THE STORE!",store.getState()))
export default store