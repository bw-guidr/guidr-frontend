import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TripCard from './TripCard'

export default function TripGrid() {
  const id = 1;
  const [trips, setTrips] = useState([]);
  useEffect(() => {

      axios
        .get('https://guidr-backend-justin-chen.herokuapp.com/user/${id}/trips')
        .then(response => {
          setTrips(response.data.results);
          console.log('Users API:', response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }, [])

  return (
  <section className='ui link cards'>
    {trips.map(trips =>{
            return <TripCard name={trips.name} 
                               description={trips.description}
                               episodes={trips.miles}
                               img={trips.image}/> })}
  </section>
  )
}
