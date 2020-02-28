import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import styled from "styled-components"

const BackgroundDiv = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #fcb97d;
    background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`

const SeniorSignUp = () => {
    const [seniors, setSeniors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "",
        available: "",
    })

    const handleChange = e => {
        setSeniors({
            ...seniors,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <BackgroundDiv>
            <Container>
                <Row>
                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                        <h1>Volunteer Sign Up</h1>
                        <AvForm>
                            <AvField
                                label='First Name'
                                type='text'
                                name='firstName'
                                placeholder='Please enter your first name here'
                                value={seniors.firstName}
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
                                value={seniors.lastName}
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
                                type='text'
                                name='email'
                                placeholder='Please enter a valid email here'
                                value={seniors.email}
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
                                label='Country'
                                type='select'
                                name='country'
                                value={seniors.country}
                                onChange={handleChange}
                                helpMessage='Please select a country from the following'>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                                <option>England</option>
                                <option>France</option>
                            </AvField>
                            <AvField
                                label='Availability'
                                type='text'
                                name='available'
                                placeholder='Please indicate your availability'
                                value={seniors.available}
                                onChange={handleChange}
                                validate={{
                                    required: {
                                        value: true,
                                        errorMessage:
                                            "Please let us know your time preference",
                                    },
                                }}
                            />
                            <AvField
                                label='Password'
                                type='text'
                                name='password'
                                placeholder='Please enter an awesome password here'
                                value={seniors.password}
                                onChange={handleChange}
                                validate={{
                                    required: {
                                        value: true,
                                        errorMessage:
                                            "Password must be 8 characters long",
                                    },
                                }}
                            />
                            <Button type='submit'>Submit</Button>
                        </AvForm>
                    </Col>
                </Row>
            </Container>
        </BackgroundDiv>
    )
}

export default SeniorSignUp
