import React, { useState, useEffect } from 'react';
import { BackgroundDiv } from '../../Styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSeniors } from '../../redux/actions';
import SeniorCard from '../senior/SeniorCard';
import DashNavBar from '../navs/DashNavBar';
import { Col, Row } from 'reactstrap';

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
		setSearchResults(
			seniors.filter(
				character =>
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
			<BackgroundDiv>
				<form className='nonForm'>
					<input
						style={{ width: '50%' }}
						type='search'
						name='search'
						value={searchTerm}
						onChange={handleChange}
						placeholder='Search For a Volunteer by Time or Country'
					/>
				</form>
				<div className='nonForm'>
				<button  onClick={handleClick}>
					Search
				</button>
				</div>
				
				<div>
					<Row>
						{searchResults.map(person => {
							return (
								<Col lg='3'>
									<SeniorCard key={person.id} times={person.availability} location={person.country} user_id={person.user_id} />
								</Col>
							);
						})}
					</Row>
				</div>
			</BackgroundDiv>
		</div>
	);
};

export default StudentDash;
