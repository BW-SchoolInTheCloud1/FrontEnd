import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postNewAdmin } from '../redux/actions';
import { Button, Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
	height: 100vh;
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	// background-color: #fcb97d;
	background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`;

const AdminSignUp = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [adminToPost, setAdminToPost] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		role: 'admin',
	});

	const handleChange = e => {
		setAdminToPost({
			...adminToPost,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(postNewAdmin(adminToPost));
		setAdminToPost({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			role: 'admin',
		});
		history.push('/admin-dash');
	};

	return (
		<BackgroundDiv>
			<Container>
				<Row>
					<Col sm='12' md={{ size: 6, offset: 3 }}>
						<h1>Admin Sign Up</h1>
						<AvForm className='StudentSignUp-form' onSubmit={handleSubmit}>
							<AvField
								label='First Name'
								type='text'
								name='firstName'
								placeholder='Please enter your first name here'
								value={adminToPost.firstName}
								onChange={handleChange}
								validate={{
									required: {
										value: true,
										errorMessage: 'A first name is required',
									},
								}}
							/>
							<AvField
								label='Last Name'
								type='text'
								name='lastName'
								placeholder='Please enter your last name here'
								value={adminToPost.lastName}
								onChange={handleChange}
								validate={{
									required: {
										value: true,
										errorMessage: 'A last name is required',
									},
								}}
							/>
							<AvField
								label='Email'
								type='email'
								name='email'
								placeholder='Please enter a valid email here'
								value={adminToPost.email}
								onChange={handleChange}
								validate={{
									required: {
										value: true,
										errorMessage: 'A valid email is required for sign up',
									},
								}}
							/>
							<AvField
								label='Password'
								type='password'
								name='password'
								placeholder='Please enter an awesome password here'
								value={adminToPost.password}
								onChange={handleChange}
								validate={{
									required: {
										value: true,
										errorMessage: 'Password must be 8 characters long',
									},
								}}
							/>
							<Button type='submit'>Submit</Button>
						</AvForm>
					</Col>
				</Row>
			</Container>
		</BackgroundDiv>
	);
};

export default AdminSignUp;
