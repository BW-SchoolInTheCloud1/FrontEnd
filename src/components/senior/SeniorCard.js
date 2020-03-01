import React from 'react';



const SeniorCard = ({ times, location }) => {
  
  return (
    <div>
      <h2>Available: {times}</h2>
      <h3>Location: {location}</h3>
    </div>
  )
}

export default SeniorCard