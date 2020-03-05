import React from 'react';
import {  Container } from 'reactstrap';
import DashNavBar from '../navs/DashNavBar';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const AdminDash = () => {
	const { id } = useParams();
	
	return (
		<div>
			<DashNavBar/>
			<Container className='nestedNav'>
				<NavLink className='navLink2' to={`/admin-dash/${id}/showTask`} activeClassName='active'>
					Show all tasks
				</NavLink>
				<NavLink className='navLink2' to={`/admin-dash/${id}/adminVolunteer`} activeClassName='active'>
					Show all Volunteers
				</NavLink>
			</Container>
		</div>
	);
};

export default AdminDash;
