import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { BackgroundDiv } from "../../Styles/styles"
import { useDispatch } from "react-redux"
import { postNewSenior } from "../../redux/actions"
import axios from "axios"
import { timeOptions } from "../../data"
import NavBar from '../navs/NavBar'

const SeniorSignUp = props => {
   const dispatch = useDispatch()
   const [country, setCountry] = useState([])

   useEffect(() => {
      axios
         .get(`https://restcountries.eu/rest/v2/all`)
         .then(response => {
            console.log("this is my country data", response.data)
            setCountry(response.data)
         })
         .catch(error => {
            console.log("No go", error)
         })
   }, [])

   const [seniorToPost, setSeniorToPost] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
      available: "",
      role: "volunteer",
   })

   const handleChange = e => {
      setSeniorToPost({
         ...seniorToPost,
         [e.target.name]: e.target.value,
      })
	}
	
   const handleSubmit = e => {
      e.preventDefault()
      dispatch(postNewSenior(seniorToPost, props))
      setSeniorToPost({
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         country: "",
         available: "",
         role: "volunteer",
      })
   }

   return (
      <div>
      <NavBar />
      <BackgroundDiv>
         <Container style={{ paddingTop: "40px" }}>
            <Row>
               <Col sm={{ size: 6, order: 2, offset: 3 }}>
                  <h1 className='nonForm'>Volunteer Sign Up</h1>
                  <AvForm
                     className='formWrapper'
                     onSubmit={handleSubmit}
                     style={{ marginTop: "40px" }}
						>
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
                               errorMessage:
                                   "A first name is required",
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
                                errorMessage: "A last name is required",
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
                              errorMessage:
                                 "A valid email is required for sign up. No AOL emails, please",
                           },
                        }}
                     />
                     <AvField
                        label='Country.'
                        type='select'
                        name='country'
                        defaultValue='DEFAULT'
                        value={seniorToPost.country}
                        onChange={handleChange}
							>
                        <option value='DEFAULT' disabled>
                            Please select a country
                        </option>
                        {country.map(country => {
                            return <option>{country.name}</option>
                        })}
                     </AvField>
                     <AvField
                        label='Availability.'
                        type='select'
                        name='availability'
                        defaultValue='DEFAULT'
                        value={seniorToPost.availability}
                        onChange={handleChange}
							>
                        <option value='DEFAULT' disabled>
                            Select an Availability
                        </option>
                        {timeOptions.map(times => {
                            return <option>{times}</option>
                        })}
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
                               errorMessage:
                                   "Password must be 8 characters long",
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
      </div>
   )
}

export default SeniorSignUp
