import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN = 'LOGIN';
export const GET_SENIORS_LIST = 'GET_SENIORS_LIST';
export const POST_NEW_SENIOR = 'POST_NEW_SENIOR';
export const POST_NEW_STUDENT = 'POST_NEW_STUDENT';
export const POST_NEW_TASK = 'POST_NEW_TASK';
export const SET_ERROR = 'SET_ERROR';

export const login = (credentials, props) => dispatch => {
   dispatch({ type: LOGIN })
}

export const getSeniors = () => dispatch => {
   dispatch({ type: GET_SENIORS_LIST })
}

export const postNewSenior = seniorToPost => dispatch => {
   dispatch({ type: POST_NEW_SENIOR })
}

export const postNewStudent = studentToPost => dispatch => {
   dispatch({ type: POST_NEW_STUDENT })
}

export const postNewTask = TaskToPost => dispatch => {
   dispatch({ type: POST_NEW_TASK })
}