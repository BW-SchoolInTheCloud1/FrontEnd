import React from 'react';
import { Col } from 'reactstrap'


const SeniorCard = ({ times, location, user_id }) => {
  
  return (
    <div key={user_id}>
      <h3>Available: {times}</h3>
      <h3>Location: {location}</h3>
      <h4>Id: {user_id}</h4>
      </div>
  )
}

export default SeniorCard