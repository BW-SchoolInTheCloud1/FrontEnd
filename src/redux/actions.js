import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN = 'LOGIN'
export const GET_SENIORS_LIST = 'GET_SENIORS_LIST'
export const GET_TASKS = 'GET_TASKS'
export const POST_NEW_SENIOR = 'POST_NEW_SENIOR'
export const POST_NEW_STUDENT = 'POST_NEW_STUDENT'
export const POST_NEW_ADMIN = 'POST_NEW_ADMIN'
export const ASSIGN_NEW_TASK = 'POST_NEW_TASK'
export const SET_ERROR = 'SET_ERROR'
export const PREPARE_DATA = 'PREPARE_DATA'

export const login = (credentials, props) => dispatch => {
   axiosWithAuth()
      .post('/auth/login', credentials)
      .then(res => {
         console.log(res)
         localStorage.setItem('token', res.data.token)
         if (res.data.user.role === 'admin') {
            props.history.push('/admin-dash')
         } else if (res.data.user.role === 'volunteer') {
            props.history.push('/volunteer-dash')
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

export const getSeniors  =  () =>async dispatch =>  {
   dispatch({ type: GET_SENIORS_LIST })
   await
   axiosWithAuth()
		         .get('/volunteer/')
				   .then(res => {
					console.log('GET_SENIORS_LIST', res);
					dispatch({ type: GET_SENIORS_LIST,  payload: res.data });
				})
				.catch(err => {
					console.log('NOOOOO!!!!', err);
					dispatch({ type: SET_ERROR, payload: 'error getting tasks' });
            });
   
}


export const postNewSenior = (seniorToPost) => dispatch => {
   dispatch({ type: POST_NEW_SENIOR })
   axiosWithAuth()
      .post('/auth/register', seniorToPost)
      .then(res => {
         console.log("Yo Look Here!", res)
         localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error logging in'})
      })
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

export const getTasks = () => dispatch => {
   axiosWithAuth()
      .get('/todos')
      .then(res => {
         console.log("GET_TASKS", res)
         dispatch({ type: GET_TASKS, payload: res.data })
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error getting tasks'})
      })
}

export const assignNewTask = taskToAssign => dispatch => {
   axiosWithAuth()
      .post('/admin/8/todos', taskToAssign)
      .then(res => {
         console.log("ASSIGN_NEW_TASK", res.data)
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error assigning task'})
      })
}