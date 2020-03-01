import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getSeniors } from '../../redux/actions';
import SeniorList from '../senior/SeniorList';

const BackgroundDiv = styled.div`
	height: 100vh;
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`;

const StudentDash = () => {
	const seniors = useSelector(state => state.seniors);
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('')
	

	
	const handleChange = e => {
		setSearchTerm(e.target.value)
	};

	const handleSubmit = e => {
		e.preventDefault();
		const results = seniors.filter(character => {
			return (
				character.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
				character.availability.toLowerCase().includes(searchTerm.toLowerCase())
			);
		});
			dispatch(getSeniors(results));
		
	};
	return (
		<BackgroundDiv>
			<form onSubmit={handleSubmit}>
				<input type='search' name='search' value={searchTerm} onChange={handleChange} />
				<button>Search</button>
			</form>
			<div>
				<SeniorList />
			</div>
		</BackgroundDiv>
	);
};

export default StudentDash;
