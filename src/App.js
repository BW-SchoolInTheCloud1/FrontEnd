import React from 'react'
import "./App.css"
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './components/Login'
import StudentSignUp from './components/StudentSignUp'
import SeniorSignUp from './components/SeniorSignUp'
import AdminSignUp from './components/AdminSignUp'
import Register from './components/Register'

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Route exact path='/' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/student' component={StudentSignUp} />
			<Route path='/volunteer' component={SeniorSignUp} />
			<Route path='/admin-signup' component={AdminSignUp} />
		</div>
	);
}

export default App;
