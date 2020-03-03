import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSeniors } from '../../redux/actions'
import SeniorCard from './SeniorCard';
import {Col,Row} from 'reactstrap'
import AdminDash from '../admin/AdminDash';

const SeniorList = () => {
  const seniors = useSelector(state => state.seniors);
	  
	const dispatch = useDispatch()

  	useEffect(() => {
		  dispatch(getSeniors())
  	}, [dispatch])
  
	return (
		<div>
			<AdminDash />
			<Row>
				{seniors.map(person => (
					<Col lg='4'>
						<SeniorCard 
							key={person.id} 
							firstName={person.firstName} 
							lastName={person.lastName} 
							times={person.availability} 
							location={person.country} 
							user_id={person.user_id} 
						/>
					</Col>
				))}
			</Row>
		</div>
	);
}

export default SeniorList