import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewAdmin } from '../../redux/actions';
import { Button, Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Register from '../navs/Register';

const AdminSignUp = props => {
	const dispatch = useDispatch();
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
		dispatch(postNewAdmin(adminToPost, props));
		setAdminToPost({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			role: 'admin',
		});
	};
	
	return (
		<div>
			<Register />
			<Container>
				<Row>
					<Col sm='12' md={{ size: 6, offset: 3 }}>
						<h1 className='nonForm'>Admin Sign Up</h1>
						<AvForm className='formWrapper' onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
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
							<Button outline color='primary' type='submit' className='formButton'>
								Sign Up
							</Button>
						</AvForm>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AdminSignUp;
