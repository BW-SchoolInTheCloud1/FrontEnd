import React from "react"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import { BackgroundDiv } from "../../Styles/styles"

const Register = () => {
    return (
        <BackgroundDiv className='nonForm'>
            <h1 className='nonForm'>Choose a Role to Register</h1>
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
    )
}
export default Register
