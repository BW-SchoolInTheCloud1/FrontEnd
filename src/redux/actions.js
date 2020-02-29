import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN = 'LOGIN'
export const GET_SENIORS_LIST = 'GET_SENIORS_LIST'
export const POST_NEW_SENIOR = 'POST_NEW_SENIOR'
export const POST_NEW_STUDENT = 'POST_NEW_STUDENT'
export const POST_NEW_ADMIN = 'POST_NEW_ADMIN'
export const ASSIGN_NEW_TASK = 'POST_NEW_TASK'
export const SET_ERROR = 'SET_ERROR'

export const login = (credentials, props) => dispatch => {
   axiosWithAuth()
      .post('/auth/login', credentials)
      .then(res => {
         console.log(res)
         localStorage.setItem('token', res.data.token)
         if (res.data.user.role === 'admin') {
            props.history.push('/admin-dash')
         } else if (res.data.user.role === 'volunteer') {
            props.history.push('/senior-dash')
         } else if (res.data.user.role === 'student') {
            props.history.push('/student-dash')
         }
      })
      .catch(err => {
         localStorage.removeItem('token')
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error logging in'})
      })
}

export const getSeniors = () => dispatch => {
   dispatch({ type: GET_SENIORS_LIST })
}

export const postNewSenior = seniorToPost => dispatch => {
   dispatch({ type: POST_NEW_SENIOR })
}

export const postNewStudent = (studentToPost) => dispatch => {
   dispatch({ type: POST_NEW_STUDENT })
   axiosWithAuth()
      .post('/auth/register', studentToPost)
      .then(res => {
         console.log("Yo Look Here!", res)
         localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error logging in'})
      })
}

export const postNewAdmin = (adminToPost) => dispatch => {
   dispatch({ type: POST_NEW_ADMIN })
   axiosWithAuth()
      .post('/auth/register', adminToPost)
      .then(res => {
         console.log("Yo Look Here!", res)
         localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error logging in'})
      })
}

export const assignNewTask = taskToAssign => dispatch => {
   dispatch({ type: ASSIGN_NEW_TASK })
   axiosWithAuth()
      .post('/admin/8/todos', taskToAssign)
      .then(res => {
         console.log("Yo Look Here!", res)
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error logging in'})
      })
}