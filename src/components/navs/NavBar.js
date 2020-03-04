import React from "react"
import Logo from "../../images/Golden-Tutors-logo.png"
import { Navbar, NavbarBrand
} from "reactstrap"

const NavBar = () => {
    return (
        <div>
            <Navbar color='dark' dark>
                <NavbarBrand
                    href='https://goldentutors.netlify.com/'
                    className='mr-auto'>
                    <img src={Logo} alt='logo' className='logo' />
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default NavBar
