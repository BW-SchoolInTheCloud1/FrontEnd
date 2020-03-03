import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../redux/actions"
import { Button, Container, Row, Col } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import NavBar from '../components/navs/NavBar'
import { Link } from 'react-router-dom'

const Login = props => {
   const dispatch = useDispatch()
   const [credentials, setCredentials] = useState({
       email: "",
       password: "",
	})
	
   const handleChange = e => {
       setCredentials({
           ...credentials,
           [e.target.name]: e.target.value,
       })
	}
	
   const handleSubmit = () => {
       dispatch(login(credentials, props))
       setCredentials({
           email: "",
           password: "",
       })
   }

   return (
      <div>
      <NavBar />
         <Container style={{ paddingTop: "40px" }}>
            <Row>
               <Col sm='12' md={{ size: 6, offset: 3 }}>
                  <h3 className='nonForm'>Log In</h3>
                  <AvForm
                     className='formWrapper'
                     onSubmit={handleSubmit}
                     style={{ marginTop: "40px" }}>
                     <AvField
                        label='Email'
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Please enter your email here'
                        value={credentials.email}
                        onChange={handleChange}
                        validate={{
                           required: {
                              value: true,
                              errorMessage:
                                 "A valid email is required for log in",
                           },
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
                           required: {
                              value: true,
                              errorMessage:
                                  "A valid password is required for log in",
                           },
                        }}
                     />
                     <Button className='formButton'>Log In</Button>
                  </AvForm>
               </Col>
            </Row>
         </Container>
         <div style={{ marginTop: '50px'}}>
            <p className='nonForm'>Don't have an account? Click here to <Link to='/register'>Register</Link></p>
         </div>
      </div>
   )
}

export default Login