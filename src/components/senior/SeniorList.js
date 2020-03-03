import React from 'react';
import { useSelector } from 'react-redux';
import SeniorCard from './SeniorCard';
import {Col,Row} from 'reactstrap'

const SeniorList = () => {
  const seniors = useSelector(state => state.seniors);
  
  
	return (
		
		<div>
			
			<div>
				<Row>
					{seniors.map(person => (
						<Col lg='4'>
							<SeniorCard key={person.id} firstName={person.firstName} lastName={person.lastName} times={person.availability} location={person.country} user_id={person.user_id} />
						</Col>
					))}
				</Row>
				</div>
				
			
			</div>
		
);
}

export default SeniorList