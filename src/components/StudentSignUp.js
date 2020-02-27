import React, { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
// import axios from "axios"

const StudentSignUp = ({ touched, errors, status }) => {
    const [student, setStudent] = useState([])

    useEffect(() => {
        status && setStudent(student => [...student, status])
    }, [status])

    return (
        <div>
            <h1>Student Sign Up</h1>
            <Form className='StudentSignUp-form'>
                <Field type='text' name='firstname' placeholder='first name' />
                {touched.firstname && errors.firstname && (
                    <p className='errors'>{errors.firstname}</p>
                )}
                <Field type='text' name='lastname' placeholder='last name' />
                <Field type='text' name='email' placeholder='email' />
                <Field type='text' name='password' placeholder='password' />

                <button type='submit'>Submit</button>
            </Form>
            {student.map(student => (
                <ul key={student.id}>
                    <li>First Name: {student.firstname}</li>
                    <li>Last Name: {student.lastname}</li>
                    <li>Email: {student.email}</li>
                    <li>Password: {student.password}</li>
                </ul>
            ))}
        </div>
    )
}

const FormikStudentSignUp = withFormik({
    mapPropsToValues({ firstname, lastname, email, password }) {
        return {
            firstname: firstname || "",
            lastname: lastname || "",
            email: email || "",
            password: password || "",
        }
    },

    validationSchema: Yup.object().shape({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters or more")
            .required("Password is required"),
    }),

    // handleSubmit(values, { setStatus }) {
    //     // values is our object with all our data on it
    //     axios
    //         .post("https://reqres.in/api/users/", values)
    //         .then(res => {
    //             setStatus(res.data)
    //             console.log(res)
    //         })
    //         .catch(err => console.log(err.response))
    // },
})(StudentSignUp)

export default FormikStudentSignUp
