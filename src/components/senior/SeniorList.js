import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSeniors } from '../../redux/actions';
import SeniorCard from './SeniorCard';
import { Col, Row } from 'reactstrap';
import AdminDash from '../admin/AdminDash';


const SeniorList = () => {
	const seniors = useSelector(state => state.seniors);
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState(seniors);
	
	useEffect(() => {
		dispatch(getSeniors())
	},[dispatch])
	
	useEffect(() => {
		const results = seniors.filter(character => {
			return (
				character.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			 	character.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			 	character.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
			 	character.availability.toLowerCase().includes(searchTerm.toLowerCase())
			)
		});
		setSearchResults(results);
	}, [searchTerm, seniors]);

	const handleChange = e => {
		setSearchTerm(e.target.value);
		console.log('From handleChange in StudentList---->', searchTerm);
	};

	return (
		<div>
			<section>
				<AdminDash />
				<input
					style={{ marginLeft: '36%', width: '29%' }}
					placeholder='Search...'
					onChange={handleChange}
					type='text'
					name='searchTerm'
					value={searchTerm}
				/>
			</section>

			{searchTerm.length === 0 ? (
				<div>
					<Row>
						{seniors.map(person => {
							return(
								<Col lg='4' key={person.id}>
									<SeniorCard
										key={person.id}
										firstName={person.firstName}
										lastName={person.lastName}
										times={person.availability}
										location={person.country}
										volunteer_id={person.volunteer_id}
									/>
								</Col>
						)})}
					</Row>
				</div>
			) : (
				<div>
					<Row>
						{searchResults.map(person => (
							<Col lg='4'>
								<SeniorCard
									key={person.id}
									firstName={person.firstName}
									lastName={person.lastName}
									times={person.availability}
									location={person.country}
									volunteer_id={person.volunteer_id}
								/>
							</Col>
						))}
					</Row>
				</div>
			)}
		</div>
	);
};

export default SeniorList;

//$ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^$//
//@ -----------------------IGNORE ANY CODE BELOW THIS LINE--------------------@//











































// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getSeniors } from '../../redux/actions';
// import SeniorCard from './SeniorCard';
// import { Col, Row } from 'reactstrap';
// import AdminDash from '../admin/AdminDash';
// import axios from 'axios';

// const SeniorList = () => {
// 	const seniors = useSelector(state => state.seniors);
// 	const dispatch = useDispatch();
// 	const [searchTerm, setSearchTerm] = useState('');
// 	const [searchResults, setSearchResults] = useState(seniors);
// 	// const [avatars, setAvatars] = useState([]);

// 	useEffect(() => {
// 		dispatch(getSeniors());
// 		// axios
// 		// 	.get('https://pixabay.com/api/?key=15487793-8de1803bf08fe5bfa00ea0af4&q=grandparents&image_type=photo')
// 		// 	.then(res => {
// 		// 		console.log('Images API INFO ----->', res.data.hits.map(avatar => avatar.largeImageURL));
// 		// 		setAvatars(res.data.hits.map(avatar => avatar.largeImageURL));

// 		// 	})
// 		// 	.catch(err => console.log('No Images', err));
// 	}, [dispatch]);

// 	useEffect(() => {
// 		const results = seniors.filter(character => {
// 			return (
// 				character.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// 				character.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// 				character.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
// 				character.availability.toLowerCase().includes(searchTerm.toLowerCase())
// 			);
// 		});
// 		setSearchResults(results);
// 	}, [searchTerm, seniors]);

// 	const handleChange = e => {
// 		setSearchTerm(e.target.value);
// 		console.log('From handleChange in StudentList---->', searchTerm);
// 	};

// 	return (
// 		<div>
// 			<section>
// 				<AdminDash />
// 				<input
// 					style={{ marginLeft: '36%', width: '29%' }}
// 					placeholder='Search...'
// 					onChange={handleChange}
// 					type='text'
// 					name='searchTerm'
// 					value={searchTerm}
// 				/>
// 			</section>

// 			{searchTerm.length === 0 ? (
// 				<div>
// 					<Row>
// 						{seniors.map(person => {
// 							return (
// 								<Col lg='4' key={person.id}>
// 									<SeniorCard
// 										key={person.id}
// 										firstName={person.firstName}
// 										lastName={person.lastName}
// 										times={person.availability}
// 										location={person.country}
// 										volunteer_id={person.volunteer_id}
// 									/>
// 								</Col>
// 							);
// 						})}
// 					</Row>
// 				</div>
// 			) : (
// 				<div>
// 					<Row>
// 						{searchResults.map(person => (
// 							<Col lg='4'>
// 								<SeniorCard
// 									key={person.id}
// 									firstName={person.firstName}
// 									lastName={person.lastName}
// 									times={person.availability}
// 									location={person.country}
// 									volunteer_id={person.volunteer_id}
// 								/>
// 							</Col>
// 						))}
// 					</Row>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default SeniorList;
