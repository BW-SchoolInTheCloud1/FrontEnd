import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import styled from "styled-components"

const BackgroundDiv = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    // background-color: #fcb97d;
    background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`

const StudentSignUp = () => {
    const [students, setStudents] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handleChange = e => {
        setStudents({
            ...students,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <BackgroundDiv>
            <Container>
                <Row>
                    <Col sm='12' md={{ size: 6, offset: 3 }}>
                        <h1>Student Sign Up</h1>
                        <AvForm className='StudentSignUp-form'>
                            <AvField
                                label='First Name'
                                type='text'
                                name='firstName'
                                placeholder='Please enter your first name here'
                                value={students.firstName}
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
                                value={students.lastName}
                                onChange={handleChange}
                                validate={{
                                    required: {
                                        value: true,
                                        errorMessage: "A last name is required",
                                    },
                                }}
                            />
                            <AvField
                                label='email'
                                type='text'
                                name='email'
                                placeholder='Please enter a valid email here'
                                value={students.email}
                                onChange={handleChange}
                                validate={{
                                    required: {
                                        value: true,
                                        errorMessage:
                                            "A valid email is required for sign up",
                                    },
                                }}
                            />
                            <AvField
                                label='Password'
                                type='text'
                                name='password'
                                placeholder='Please enter an awesome password here'
                                value={students.password}
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

export default StudentSignUp
