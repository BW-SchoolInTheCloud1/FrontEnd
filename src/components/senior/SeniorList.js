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
					<div timeout= {6000}>
						<Spinner />
						<Spinner />
						<Spinner />
					</div>
				) : (
					<div>
						{seniors.map(person => (
							<div>
								<SeniorCard
									time={person.availability}
									location={person.country}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		);
}

export default SeniorList