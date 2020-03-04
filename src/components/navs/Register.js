import React from 'react';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

const Register = () => {
	return (
		<Container>
			<NavBar />
			<h1 className='nonForm' style={{ paddingTop: '40px' }}>
				Choose a Role to Register
			</h1>
			<Container className='nestedNav'>
				<NavLink to='/register/student' activeClassName='active' className='navLink'>
					Students
				</NavLink>

				<NavLink to='/register/volunteer' className='navLink' activeClassName='active'>
					Volunteers
				</NavLink>

				<NavLink to='/register/admin-signup' className='navLink' activeClassName='active'>
					Admin
				</NavLink>
			</Container>
		</Container>
	);
};

export default Register;
