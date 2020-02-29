import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postNewStudent } from '../redux/actions'
import { Button, Container, Row, Col } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import styled from 'styled-components';

const BackgroundDiv = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    // background-color: #fcb97d;
    background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`

const StudentSignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [studentToPost, setStudentToPost] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: 'student'
    })

    const handleChange = e => {
        setStudentToPost({
            ...studentToPost,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
		e.preventDefault();
		dispatch(postNewStudent(studentToPost));
		setStudentToPost({
			firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: 'student'
        });
        history.push('/student-dash')
	};

    return (
        <BackgroundDiv>
            <Container>
                <Row>
                    <Col sm='12' md={{ size: 6, offset: 3 }}>
                        <h1>Student Sign Up</h1>
                        <AvForm className='StudentSignUp-form' onSubmit={handleSubmit}>
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
                                value={studentToPost.lastName}
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
                                value={studentToPost.email}
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
                                type='password'
                                name='password'
                                placeholder='Please enter an awesome password here'
                                value={studentToPost.password}
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
