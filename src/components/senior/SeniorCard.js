import React from 'react';



const SeniorCard = ({ times, location, user_id }) => {
  
  return (
    <div key={user_id}>
      <h2>Available: {times}</h2>
      <h2>Location: {location}</h2>
      <p>Id: {user_id}</p>
    </div>
  )
}

export default SeniorCard