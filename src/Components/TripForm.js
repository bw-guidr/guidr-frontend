import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { defaultProps } from 'recompose';

const FormStyled = styled.form`
  border: 1px solid black;
`;

const Error = styled.div`
  background: red;
`;

export default function TripForm(props) {
  const [content, setContent] = useState({});
  const [error, setError] = useState();

  const clearForm = () => {
    setContent({});
  };

  const submitTrip = async (event) => {
    event.preventDefault();
    console.log(event);
    setError(); // reset it after last submit
    let id = localStorage.getItem('id');
    for(let key in content) {
      if(!content[key]) {
        setError(`Error: ${key} field incorrect.`);
        return false;
      }
    }
    if(!error) {
      let date = `${new Date()}`;
      let send = {...content, user_id: id, date: date};
      if(!send.trip_type) send.trip_type = 'Professional';
      console.log(send);
      let post = await axios.post('https://guidr-backend-justin-chen.herokuapp.com/trips', send,
          {headers: {Authorization: localStorage.getItem('token')}}
      );
      console.log(post);
      clearForm();
      props.setUpdate(1);
      return true;
  
    }
  };

  const updateInput = event => {
    setContent({...content, [event.target.name]: event.target.value});
  };


  return (
      <div>
        <FormStyled onSubmit={submitTrip} id='trip-form'>
          <fieldset>
            <legend>Create a Trip</legend>
            {error ? <Error>error</Error> : null}
            <input type='text' placeholder='Title' name='title' onChange={updateInput} value={content.title} />
            <input type='text' placeholder='Location' name='location' onChange={updateInput} value={content.location} />
            <input type='text' placeholder='Description' name='description' onChange={updateInput} value={content.description} />
            <input type='number' placeholder='Miles Traveled' name='miles' onChange={updateInput} value={content.miles} />
            <button onSubmit={e => e.preventDefault()}>Submit</button>
          </fieldset>
        </FormStyled>
        <select name='trip_type' form='trip-form' onChange={updateInput} value={content.trip_type}>
          <option name='trip_type' value='Professional'>Professional</option>
          <option name='trip_type' value='Private'>Private</option>
        </select>
      </div>
  );
}