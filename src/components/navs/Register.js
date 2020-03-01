import React from 'react'
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BackgroundDiv = styled.div`
	height: 100vh;
	margin: 0;
  padding: 0;
	font-family: sans-serif;
	background-color: #fcb97d;
	background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`;

const Register = () => {
  

  return (
			<BackgroundDiv className='nonForm'>
				<Button size='lg' className='registerButton'>
					<Link to='/student' className='registerLink'>
						Students
					</Link>
				</Button>
				<Button size='lg' className='registerButton'>
					<Link to='/volunteer' className='registerLink'>
						Volunteers
					</Link>
				</Button>
				<Button size='lg' className='registerButton'>
					<Link to='/admin-signup' className='registerLink'>
						Admin
					</Link>
				</Button>
			</BackgroundDiv>
		);
}
export default Register