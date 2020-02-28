import React, { useState } from "react"
import { Link } from "react-router-dom"
import Logo from '../images/Golden-Tutors-logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap"

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true)

    const toggleNavbar = () => setCollapsed(!collapsed)

    return (
					<div>
						<Navbar color='dark' dark>
							<NavbarBrand src={Logo} href='https://goldentutors.netlify.com/' className='mr-auto'>
								<img src={Logo} alt='logo' className='logo' />
							</NavbarBrand>

							<NavbarToggler onClick={toggleNavbar} className='mr-2' />
							<Collapse isOpen={!collapsed} navbar>
								<Nav navbar>
									<NavItem>
										<Link to='/login' className='navLink'>
											Log In
										</Link>
									</NavItem>
									<NavItem>
										<Link to='/register' className='navLink'>
											Register
										</Link>
									</NavItem>
								</Nav>
							</Collapse>
						</Navbar>
					</div>
				);
}

export default NavBar
