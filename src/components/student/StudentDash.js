import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeniors } from '../../redux/actions';
import SeniorCard from '../senior/SeniorCard';
import DashNavBar from '../navs/DashNavBar';
import { Col, Row } from 'reactstrap';
import { Icon, Input } from 'semantic-ui-react';

const StudentDash = () => {
	const seniors = useSelector(state => state.seniors);
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState(seniors);

	useEffect(() => {
		dispatch(getSeniors());
	}, [dispatch]);

	const handleClick = e => {
		e.preventDefault();
		setSearchResults(seniors.filter(character =>
					character.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
					character.availability.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		);
	};

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<DashNavBar />
				<form className='nonForm'>
					<Input
						className='search-bar'
						icon={<Icon name='search' inverted circular link onClick={handleClick} />}
						type='search'
						name='search'
						value={searchTerm}
						onChange={handleChange}
						placeholder='Search For a Volunteer by Time or Country'
					/>
				</form>

				<div>
					<Row>
						{searchResults.map(person => {
							return (
								<Col lg='4'>
									<SeniorCard
										key={person.id}
										times={person.availability}
										location={person.country}
										firstName={person.firstName}
										lastName={person.lastName}
										user_id={person.user_id}
									/>
								</Col>
							);
						})}
					</Row>
				</div>
		</div>
	);
};

export default StudentDash;