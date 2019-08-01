import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './Fonts.css';

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormStyled = styled.form`

  font-family: 'Matchbook', serif;
  width: 50%;
  
  fieldset {
    border: 0;
    display: flex;
    flex-wrap: wrap;
    
    h2 {
      font-family: Matchbook;
    }
    input {
      font-family: 'Bebas', serif;
      width: 100%;
      margin: 5px 0;
    }
    input#ct-title, input#ct-loc {
      width: 40%;
    }
  }
  
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
      <FormContainer>
        <FormStyled onSubmit={submitTrip} id='trip-form'>
          <fieldset>
            <h2>Create a Trip</h2>
            {error ? <Error>error</Error> : null}
            <input id='ct-title' type='text' placeholder='Title' name='title' onChange={updateInput} value={content.title} />
            <input id='ct-loc' type='text' placeholder='Location' name='location' onChange={updateInput} value={content.location} />
            <input id='ct-mt' type='number' placeholder='Miles Traveled' name='miles' onChange={updateInput} value={content.miles} />
            <input id='ct-desc' type='text' placeholder='Description' name='description' onChange={updateInput} value={content.description} />

            <button onSubmit={e => e.preventDefault()}>Submit</button>
          </fieldset>
        </FormStyled>
        <select name='trip_type' form='trip-form' onChange={updateInput} value={content.trip_type}>
          <option name='trip_type' value='Professional'>Professional</option>
          <option name='trip_type' value='Private'>Private</option>
        </select>
      </FormContainer>
  );
}