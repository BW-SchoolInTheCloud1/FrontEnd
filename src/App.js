import React from 'react';
import "./App.css"
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import StudentSignUp from './components/StudentSignUp';
import SeniorSignUp from './components/SeniorSignUp';
import Register from './components/Register';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Route exact path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/student' component={StudentSignUp} />
			<Route path='/volunteer' component={SeniorSignUp} />
		</div>
	);
}

export default App;
