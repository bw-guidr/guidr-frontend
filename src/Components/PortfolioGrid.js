import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortfolioCard from './PortfolioCard'

import {
  GET_TRIPS,
} from '../Store/Action/Action'

export default function PortfolioGrid(props) {
  let localID = localStorage.getItem('id');
  const [id, setId] = useState(localID);
  const [tripToEdit, setTripToEdit] = useState({});
  const [editNum, setEditNum] = useState(0);
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
  }, [props.update])

  return (
  <div className='ui link cards'>
    
    {trips.map(trips =>{
            return <PortfolioCard  
            {...trips} 
            editTrip={editTrip} 
            editNum={editNum} 
            key={trips.id}
            trip_type={trips.trip_type}
            tripToEdit={tripToEdit}
            removeTrip={removeTrip}
            toggleEdit={toggleEdit}
            /> })}
  </div>
  )
  
  function editTrip(e, tripToEdit) {
    e.preventDefault();
    let editedTrip = trips.map(trip => trip.id === tripToEdit.id ? tripToEdit : trip);
    setTrips(editedTrip);
    setEditNum(0);
    console.log('Trip data:', tripToEdit);
    axios
    .put(`https://guidr-backend-justin-chen.herokuapp.com/trips/${tripToEdit.id}`, tripToEdit, 
    {headers: {Authorization: localStorage.getItem('token')}})
    .then(()=>{
      console.log('trip id', tripToEdit.id)
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }

  function removeTrip(e, id) {
    e.preventDefault();
    axios
    .delete(`https://guidr-backend-justin-chen.herokuapp.com/trips/${id}`,
    {headers: {Authorization: localStorage.getItem('token')}})
    .catch(error => {
      console.error('Server Error', error);
    });
    let newTrip = trips.filter(trip => trip.id !== id);
    setTrips(newTrip);
    setEditNum(0);
  }

  function toggleEdit(id) {
    editNum === id ? setEditNum() : setEditNum(id);
    let thisTrip = trips.filter(trip => trip.id === id)[0];
    setTripToEdit(thisTrip);
  }

  
}
