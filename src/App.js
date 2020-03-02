import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './components/Login';
import StudentSignUp from './components/student/StudentSignUp';
import SeniorSignUp from './components/senior/SeniorSignUp';
import AdminSignUp from './components/admin/AdminSignUp';
import Register from './components/navs/Register';
import StudentDash from './components/student/StudentDash';
import AdminDash from './components/admin/AdminDash';
import SeniorDash from './components/senior/SeniorDash';

function App() {
	return (
		<div className='App'>
			<ProtectedRoute exact path='/student-dash/:id' component={StudentDash} />
			<ProtectedRoute exact path='/volunteer-dash/:id' component={SeniorDash} />
			<ProtectedRoute exact path='/admin-dash/:id' component={AdminDash} />
			<Route exact path='/' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/student' component={StudentSignUp} />
			<Route path='/volunteer' component={SeniorSignUp} />
			<Route path='/admin-signup' component={AdminSignUp} />
		</div>
	);
}

export default App;
