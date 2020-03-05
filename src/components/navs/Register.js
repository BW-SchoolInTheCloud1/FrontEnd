import React from 'react';
import { Container, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import Student from '../../images/Student.png';
import Senior from '../../images/Senior.png';
import Admin from '../../images/Admin.png';

const Register = () => {
	return (
		<Container>
			<NavBar />
			<h1 className='nonForm' style={{ paddingTop: '40px' }}>
				Choose a Role to Register
			</h1>
			<Container className='nestedNav'>
				<Card className='register-card' inverse>
					<CardImg width='100%' src={Student} alt='Student icon' />
					<CardImgOverlay>
						<CardTitle>Student</CardTitle>
						<CardText
							style={{
								height: '65%',
							}}>
							> In college? In high school? In school at all? Need help? You are a student. Register Here!
						</CardText>
						<NavLink
							style={{
								marginLeft: '34%',
							}}
							to='/register/student'
							activeClassName='active'
							className='navLink'>
							Students
						</NavLink>
					</CardImgOverlay>
				</Card>

				<Card className='register-card' inverse>
					<CardImg width='100%' src={Senior} alt='Volunteer icon' />
					<CardImgOverlay>
						<CardTitle>Volunteer</CardTitle>
						<CardText
							style={{
								height: '65%',
							}}>
							> Want to help students from all over? Have extra time? Why not be a tutor volunteer? Sign up now!
						</CardText>
						<NavLink to='/register/volunteer' className='navLink' activeClassName='active'>
							Volunteers
						</NavLink>
					</CardImgOverlay>
				</Card>

				<Card className='register-card' inverse>
					<CardImg width='100%' src={Admin} alt='Administrator icon' />
					<CardImgOverlay>
						<CardTitle>Administrator</CardTitle>
						<CardText
							style={{
								height: '65%',
							}}>
							Want to help students connect with tutors to help close the achievement gap by connecting students with qualified
							availble volunteer tutors. This is your Role!
						</CardText>
						<NavLink to='/register/admin-signup' className='navLink' activeClassName='active'>
							Administrator
						</NavLink>
					</CardImgOverlay>
				</Card>
			</Container>
		</Container>
	);
};

export default Register;
