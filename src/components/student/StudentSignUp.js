import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewStudent } from '../../redux/actions';
import { Button, Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Register from '../navs/Register';

const StudentSignUp = props => {
	const dispatch = useDispatch();

	const [studentToPost, setStudentToPost] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		role: 'student',
	});

	const handleChange = e => {
		setStudentToPost({
			...studentToPost,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(postNewStudent(studentToPost, props));
		setStudentToPost({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			role: 'student',
		});
	};

	return (
		<div>
			<Register />
			<Container>
				<Row>
					<Col sm='12' md={{ size: 6, offset: 3 }}>
						<h1 className='nonForm'>Student Sign Up</h1>
						<AvForm className='formWrapper' onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
							<AvField
								label='First Name'
								type='text'
								name='firstName'
								placeholder='Please enter your first name here'
								value={studentToPost.firstName}
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
								value={studentToPost.lastName}
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
								value={studentToPost.email}
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
								value={studentToPost.password}
								onChange={handleChange}
								validate={{
									required: {
										value: true,
										errorMessage: 'Password must be 8 characters long',
									},
								}}
							/>
							<Button outline color='primary' className='formButton' type='submit'>
								Sign Up
							</Button>
						</AvForm>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default StudentSignUp;
