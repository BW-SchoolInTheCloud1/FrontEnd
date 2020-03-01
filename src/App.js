import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import NavBar from './components/navs/NavBar';
import Login from './components/Login';
import StudentSignUp from './components/student/StudentSignUp';
import SeniorSignUp from './components/senior/SeniorSignUp';
import AdminSignUp from './components/admin/AdminSignUp';
import Register from './components/navs/Register';
import StudentDash from './components/student/StudentDash';
import AdminDash from './components/admin/AdminDash';
import DashBoards from './components/navs/DashBoards';
import SeniorDash from './components/senior/SeniorDash';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<ProtectedRoute exact path='/student-dash' component={StudentDash} />
			<ProtectedRoute exact path='/volunteer-dash/:id' component={SeniorDash} />
			<ProtectedRoute exact path='/admin-dash' component={AdminDash} />
			<Route exact path='/' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/student' component={StudentSignUp} />
			<Route path='/volunteer' component={SeniorSignUp} />
			<Route path='/admin-signup' component={AdminSignUp} />
			<Route path='/dashboards' component={DashBoards} />
		</div>
	);
}

export default App;
