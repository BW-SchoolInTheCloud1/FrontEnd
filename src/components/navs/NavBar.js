import React from "react"
import Logo from "../../images/Golden-Tutors-logo.png"
import { Navbar, NavbarBrand, Button
} from "reactstrap"
import {useHistory} from 'react-router-dom'


const NavBar = () => {
    const history = useHistory();
	  const url = window.location.href;
    return (
					<div>
						<Navbar color='dark' dark>
							<NavbarBrand href='https://goldentutors.netlify.com/' className='mr-auto'>
								<img src={Logo} alt='logo' className='logo' />
					</NavbarBrand>
					{url.match(/register/gi) ? (
						<Button onClick={() => history.push('/')} outline color='secondary' className='mr-2'>
							Log In
							</Button>) : (
							null)
					}
						</Navbar>
					</div>
				);
}

export default NavBar
