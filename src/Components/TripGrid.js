import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TripCard from './TripCard'

export default function TripGrid() {
  
  const [trips, setTrips] = useState([]);
  useEffect(() => {

      axios
        .get('')
        .then(response => {
          setTrips(response.data.results);
          console.log('character API:', response.data.results)
          console.log('characters:', characters)
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
