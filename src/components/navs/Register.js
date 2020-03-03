import React from "react"
import { Button } from "reactstrap"
import { NavLink } from "react-router-dom"
import NavBar from './NavBar'

const Register = () => {
    return (
        <div className='nonForm'>
            <NavBar />
            <h1 className='nonForm' style={{ paddingTop: '40px'}}>Choose a Role to Register</h1>
            
                <NavLink to='/register/student' className='registerLink' activeClassName='active'>
                    Students
                </NavLink>
            
            
                <NavLink to='/register/volunteer' className='registerLink' activeClassName='active'>
                    Volunteers
                </NavLink>
            
            
                <NavLink to='/register/admin-signup' className='registerLink' activeClassName='active'>
                    Admin
                </NavLink>
            
        </div>
    )
}

export default Register
