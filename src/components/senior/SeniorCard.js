import React from 'react';



const SeniorCard = ({ times, location, id }) => {
  
  return (
    <div key={id}>
      <h2>Available: {times}</h2>
      <h2>Location: {location}</h2>
      <p>Id: {id}</p>
    </div>
  )
}

export default SeniorCard