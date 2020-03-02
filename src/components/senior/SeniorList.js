import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap'
import SeniorCard from './SeniorCard';

const SeniorList = () => {
  const seniors = useSelector(state => state.seniors);
  const isFetching = useSelector(state => state.isFetching);
  
  return (
		<div>
			{isFetching ? (
				<div >
					<Spinner />
					<Spinner />
					<Spinner />
				</div>
			) : (
				<div>
					{seniors.map(person => (
						<SeniorCard key={person.id} times={person.availability} location={person.country} id={person.id}/>
					))}
				</div>
			)}
		</div>
);
}

export default SeniorList