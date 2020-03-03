import React from 'react';
import img from '../../images/ph.bmp';
import { Card, Image } from 'semantic-ui-react';


const SeniorCard = ({ firstName, lastName, times, location, user_id }) => {
  
	return (
		<div className='col'>
			<Card
				color
				key={user_id}
				className='cardWrapper'
				style={{
					background: '#F4F1DE',
					boxShadow: '15px 20px 15px black',
					borderRadius:'10px',
					borderTop: '5px groove #E07A5F',
					borderBottom: '5px groove #E07A5F',
					borderRight: '1px solid #E07A5F',
					borderLeft: '1px solid #E07A5F',
				}}>
				<Card.Content header>
					<span className='imgDiv'>
						<div>
							<Card.Content>{firstName}</Card.Content>
							<Card.Content>{lastName}</Card.Content>
						</div>
						<div>
							<Image src={img} alt='avatar' avatar className='img' />
						</div>
					</span>
				</Card.Content>
				<Card.Content>
					<h3>Available: {times}</h3>
					<h3>Location: {location}</h3>
				</Card.Content>
				<Card.Content extra>Id: {user_id}</Card.Content>
			</Card>
		</div>
	);
}

export default SeniorCard