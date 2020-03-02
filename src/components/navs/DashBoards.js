import React from "react"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import { BackgroundDiv } from "../../Styles/styles"

const DashBoards = () => {
    return (
        <BackgroundDiv className='nonForm'>
            <Button size='lg' className='registerButton'>
                <Link to='/student-dash' className='registerLink'>
                    Student Dash
                </Link>
            </Button>
            <Button size='lg' className='registerButton'>
                <Link to='/volunteer-dash' className='registerLink'>
                    Volunteer Dash
                </Link>
            </Button>
            <Button size='lg' className='registerButton'>
                <Link to='/admin-dash' className='registerLink'>
                    Admin Dash
                </Link>
            </Button>
        </BackgroundDiv>
    )
}
export default DashBoards
