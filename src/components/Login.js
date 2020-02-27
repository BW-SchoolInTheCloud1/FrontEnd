import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions'
import { Button, Container, Row, Col } from 'reactstrap'
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation'

const Login = props => {
   const dispatch = useDispatch()
   const [credentials, setCredentials] = useState({
      email: '',
      password: ''
   })

   const handleChange = e => {
      setCredentials({
         ...credentials,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      dispatch(login(credentials, props))
      setCredentials({
         email: '',
         password: ''
      })
   }

   return (
      <Container>
         <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
               <AvForm onSubmit={handleSubmit}>
                  <AvGroup>
                     <AvField 
                        label='Email'
                        type='email' 
                        name='email' 
                        id='email' 
                        placeholder='Please enter you email here' 
                        value={credentials.email}
                        onChange={handleChange}
                        validate={{
                           required: {value: true, errorMessage: 'A valid email is required for log in'},
                        }}
                        
                     />
                  </AvGroup>
                  <AvGroup>
                     <AvField 
                        label='Password'
                        type='password' 
                        name='password' id='password' 
                        placeholder='Please enter you password here' 
                        value={credentials.password}
                        onChange={handleChange}
                        validate={{
                           required: {value: true, errorMessage: 'A valid password is required for log in'}
                        }}
                     />
                  </AvGroup>
                  <Button color='primary'>Log In</Button>
               </AvForm>
            </Col>
         </Row>
      </Container>
   )
}

export default Login