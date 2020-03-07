import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN = 'LOGIN'
export const GET_SENIORS_LIST = 'GET_SENIORS_LIST'
export const GET_TASKS = 'GET_TASKS'
export const POST_NEW_SENIOR = 'POST_NEW_SENIOR'
export const POST_NEW_STUDENT = 'POST_NEW_STUDENT'
export const POST_NEW_ADMIN = 'POST_NEW_ADMIN'
export const ASSIGN_NEW_TASK = 'POST_NEW_TASK'
export const SET_ERROR = 'SET_ERROR'
export const GET_TASK_DATA = 'GET_TASK_DATA'
export const TOGGLE_TASK_COMPLETED = 'TOGGLE_TASK_COMPLETED'
export const EDIT_TASK = 'EDIT_TASK'


export const login = (credentials, props) => dispatch => {
   axiosWithAuth()
      .post('/auth/login', credentials)
      .then(res => {
         localStorage.setItem('token', res.data.token)
         if (res.data.user.role === 'admin') {
            props.history.push(`/admin-dash/${res.data.roleId.id}`)
         } else if (res.data.user.role === 'volunteer') {
            props.history.push(`/volunteer-dash/${res.data.roleId.id}`)
         } else if (res.data.user.role === 'student') {
            props.history.push(`/student-dash/${res.data.roleId.id}`)
         }
      })
      .catch(err => {
         localStorage.removeItem('token')
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error logging in'})
      })
}

export const getSeniors  =  () => dispatch =>  {
   axiosWithAuth()
		.get('/volunteer/')
		.then(res => {
         dispatch({ type: GET_SENIORS_LIST,  payload: res.data });
		})
		.catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error getting tasks' });
      });
}


export const postNewSenior = (seniorToPost, props) => dispatch => {
   axiosWithAuth()
      .post('/auth/register', seniorToPost)
      .then(res => {
         localStorage.setItem('token', res.data.token)
         props.history.push(`/volunteer-dash/${res.data.roleId.id}`)
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error logging in'})
      })
}


export const postNewStudent = (studentToPost, props) => dispatch => {
   axiosWithAuth()
      .post('/auth/register', studentToPost)
      .then(res => {
         localStorage.setItem('token', res.data.token)
         props.history.push(`/student-dash/${res.data.roleId.id}`)
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error logging in'})
      })
}

export const postNewAdmin = (adminToPost, props) => dispatch => {
   axiosWithAuth()
      .post('/auth/register', adminToPost)
      .then(res => {
         localStorage.setItem('token', res.data.token)
         props.history.push(`/admin-dash/${res.data.roleId.id}`)
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
         console.log('get all tasks:', res.data)
         dispatch({ type: GET_TASKS, payload: res.data })
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error getting tasks'})
      })
}

export const assignNewTask = taskToAssign => dispatch => {
   axiosWithAuth()
      .post(`/admin/${taskToAssign.admin_id}/todos`, taskToAssign)
      .then(res => {
         console.log(res)
         dispatch({ type: ASSIGN_NEW_TASK, payload: res.data})
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'error assigning task'})
      })
}

export const editTask = (taskToEdit) => dispatch => {
   axiosWithAuth()
      .put(`/admin/${taskToEdit.admin_id}/todos`, taskToEdit)
      .then(res => {
         console.log('PUT response:', res.data)
         dispatch({ type: EDIT_TASK, payload: res.data})
      })
      .catch(err => console.log(err));
}

// export const toggleTaskCompleted = taskToComplete => dispatch => {
//    dispatch({ type: TOGGLE_TASK_COMPLETED, payload: taskToComplete })
// }