import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { GET_TASKS, GET_SENIORS_LIST, ASSIGN_NEW_TASK, SET_ERROR, EDIT_TASK } from './actions';

const initialState = {
	seniors: [],
	tasks: [],
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SENIORS_LIST:
			return {
				...state,
				seniors: action.payload,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case GET_TASKS:
			return {
				...state,
				tasks: action.payload,
			};
		case ASSIGN_NEW_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};

		case EDIT_TASK:
			const newTasksArray = state.tasks.filter(task => task.id !== action.payload.id);
			return {
				...state,
				tasks: [...newTasksArray, action.payload],
			};
		default:
			return state;
	}
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log('THIS IS THE STORE!', store.getState()));
export default store;
