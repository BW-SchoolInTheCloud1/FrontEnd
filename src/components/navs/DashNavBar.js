import React from "react"
import Logo from "../../images/Golden-Tutors-logo.png"
import { useHistory } from "react-router-dom"
import { Navbar, NavbarBrand, Button } from "reactstrap"

const DashNavBar = () => {
    const history = useHistory()

    const handleClick = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        history.push("/")
    }

    return (
        <div>
            <Navbar color='dark' dark>
                <NavbarBrand
                    href='https://goldentutors.netlify.com/'
                    className='mr-auto'>
                    <img src={Logo} alt='logo' className='logo' />
                </NavbarBrand>
                <Button
                    onClick={handleClick}
                    outline
                    color='secondary'
                    className='mr-2'>
                    Log Out
                </Button>
            </Navbar>
        </div>
    )
}

export default DashNavBar

