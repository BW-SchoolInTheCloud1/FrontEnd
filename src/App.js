import React from 'react'
import "./App.css"
import { Route } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import NavBar from './components/NavBar'
import Login from './components/Login'
import StudentSignUp from './components/StudentSignUp'
import SeniorSignUp from './components/SeniorSignUp'
import AdminSignUp from './components/AdminSignUp'
import Register from './components/Register'
import StudentDash from './components/StudentDash'
import AdminDash from './components/AdminDash'
import DashBoards from './components/DashBoards'

function App() {
	return (
		<div className='App'>
         <NavBar />
         <ProtectedRoute exact path ='/student-dash' component={StudentDash}/>
			<ProtectedRoute exact path ='/admin-dash' component={AdminDash}/>
			<Route exact path='/' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/student' component={StudentSignUp} />
			<Route path='/volunteer' component={SeniorSignUp} />
         <Route path='/admin-signup' component={AdminSignUp} />
         <Route path='/dashboards' component={DashBoards}/>
		</div>
	);
}

export default App;
