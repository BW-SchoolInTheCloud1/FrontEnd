import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postNewSenior } from '../../redux/actions';

const BackgroundDiv = styled.div`
	height: 100vh;
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	background-color: #fcb97d;
	background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`;

const SeniorSignUp = props => {
	const dispatch = useDispatch();

	const [seniorToPost, setSeniorToPost] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		country: '',
		available: '',
		role: 'volunteer',
	});

	const handleChange = e => {
		setSeniorToPost({
			...seniorToPost,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(postNewSenior(seniorToPost, props));
		setSeniorToPost({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			country: '',
			available: '',
			role: 'volunteer',
		});
	};

	return (
		<BackgroundDiv>
			<Container style={{ paddingTop: '40px' }}>
				<Row>
					<Col sm={{ size: 6, order: 2, offset: 3 }}>
						<h1 className='nonForm'>Volunteer Sign Up</h1>
						<AvForm className='formWrapper' onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
							<AvField
								label='First Name'
								type='text'
								name='firstName'
								placeholder='Please enter your first name here'
								value={seniorToPost.firstName}
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
								value={seniorToPost.lastName}
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
								value={seniorToPost.email}
								onChange={handleChange}
								validate={{
									required: {
										value: true,
										errorMessage: 'A valid email is required for sign up. No AOL emails, please',
									},
								}}
							/>
							<AvField
								label='Country.'
								type='select'
								name='country'
								defaultValue='DEFAULT'
								value={seniorToPost.country}
								onChange={handleChange}>
								<option value='DEFAULT' disabled>
									Please select a country
								</option>
								<option>USA</option>
								<option>Canada</option>
								<option>France</option>
								<option>Wakanda</option>

								{/* write map function to return more options the one above is a placeholder */}
							</AvField>
							<AvField
								label='Availability.'
								type='select'
								name='availability'
								defaultValue='DEFAULT'
								value={seniorToPost.availability}
								onChange={handleChange}>
								<option value='DEFAULT' disabled>
									Please select your availability
								</option>
								<option>Mon-Fri, 2pm-3pm</option>
								<option>Mon-Fri, 3pm-4pm</option>
								<option>Mon-Fri, 4pm-5pm</option>
								<option>Mon-Fri, 5pm-6pm</option>
								<option>Mon-Fri, 6pm-7pm</option>

								{/* write map function to return more options the one above is a placeholder */}
							</AvField>
							<AvField
								label='Password'
								type='password'
								name='password'
								placeholder='Please enter an awesome password here'
								value={seniorToPost.password}
								onChange={handleChange}
								validate={{
									required: {
										value: true,
										errorMessage: 'Password must be 8 characters long',
									},
								}}
							/>
							<Button className='formButton' type='submit'>
								Sign Up
							</Button>
						</AvForm>
					</Col>
				</Row>
			</Container>
		</BackgroundDiv>
	);
};

export default SeniorSignUp;
