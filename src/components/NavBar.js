import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Golden-Tutors-logo.png';
import { useHistory } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Button,
	/* NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, */
} from 'reactstrap';

const NavBar = () => {
	const history = useHistory() ;
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	const handleClick = e => {
		e.preventDefault();
		localStorage.removeItem('token');
		history.push('/');
	};
	const clickHandle = e => {
		e.preventDefault();
		history.push('/');
	};
	return (
		<div>
			<Navbar color='dark' dark>
				<NavbarBrand src={Logo} href='https://goldentutors.netlify.com/' className='mr-auto'>
					<img src={Logo} alt='logo' className='logo' />
				</NavbarBrand>
				<Button onClick={clickHandle}outline color='secondary'>
					Log In
				</Button>
				<Button onClick={handleClick} outline color='secondary'>
					Log Out
				</Button>
				<NavbarToggler onClick={toggleNavbar} className='mr-2' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<Link to='/register' className='navLink'>
								Register
							</Link>
						</NavItem>
						<NavItem>
							<Link to='/dashboards' className='navLink'>
								Dashboards
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
