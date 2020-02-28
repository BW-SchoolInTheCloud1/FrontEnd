import React, { useState } from "react"
import { Link } from "react-router-dom"
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
                <NavbarBrand href='/' className='mr-auto'>
                    Golden Tutor
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className='mr-2' />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to='/login'>Log In</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/sign-up'>Sign Up</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/volunteer'>Volunteer</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
