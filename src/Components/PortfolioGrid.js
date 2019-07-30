import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortfolioCard from './PortfolioCard'

export default function PortfolioGrid() {

  const [id, setId] = useState(1)
  const [trips, setTrips] = useState([]);
  useEffect(() => {

      axios
        .get(`https://guidr-backend-justin-chen.herokuapp.com/user/${id}/trips`)
        .then(response => {
          setTrips(response.data);
          console.log('Users API:', response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }, [id])

  return (
  <section className='ui link cards'>
    {trips.map(trips =>{
            return <PortfolioCard name={trips.title} 
                               description={trips.description}
                               episodes={trips.miles}
                               img={trips.image}/> })}
  </section>
  )
}
