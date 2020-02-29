import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions'
import { Button, Container, Row, Col } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'

const BackgroundDiv = styled.div`
	height: 100vh;
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	background-color: #fcb97d;
	background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`;

const Login = props => {
	const dispatch = useDispatch();
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(login(credentials, props));
		setCredentials({
			email: '',
			password: '',
		});
	};

	return (
		<BackgroundDiv>
			<Container>
				<Row>
					<Col sm='12' md={{ size: 6, offset: 3 }}>
						<h3>Log in below</h3>
						<AvForm onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
							<AvField
								label='Email'
								type='email'
								name='email'
								id='email'
								placeholder='Please enter your email here'
								value={credentials.email}
								onChange={handleChange}
								validate={{
									required: { value: true, errorMessage: 'A valid email is required for log in' },
								}}
							/>
							<AvField
								label='Password'
								type='password'
								name='password'
								id='password'
								placeholder='Please enter your password here'
								value={credentials.password}
								onChange={handleChange}
								validate={{
									required: { value: true, errorMessage: 'A valid password is required for log in' },
								}}
							/>
							<Button>Log In</Button>
						</AvForm>
					</Col>
				</Row>
			</Container>
		</BackgroundDiv>
	);
};

export default Login;
