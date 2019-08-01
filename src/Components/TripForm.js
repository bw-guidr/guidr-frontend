import React, { useState } from 'react';
import axios from 'axios';
import { Checkbox } from "semantic-ui-react";
import styled from 'styled-components';
import './Fonts.css';
import Palette from './Palette';

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const FormStyled = styled.form`

  font-family: 'Montserrat', serif;
  width: 50%;
  
  fieldset {
    border: 0;
    display: flex;
    flex-wrap: wrap;
    
    h2 {
      font-family: 'Montserrat', serif;
      width: 100%;
      text-align: center;
    }
    input {
      font-family: 'Montserrat', serif;
      width: 100%;
      margin: 5px 0;
      border-radius: 10px;
      height: 30px;
      border: 1px solid #424242;
      padding: 5px;
    }
    input#ct-title, input#ct-loc {
      width: 40%;
    }
    input#ct-desc {
      height: 100px;
    }
    #btn-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 30px;
      
      button#ct-submit {
        width: 120px;
        height: 40px;
        font-size: 1.7rem;
        background: ${Palette.secondary.highlight};
        border: 0;
        border-radius: 3px;
      }
    }
    div#ct-type-container {
      display: flex;
      justify-content: space-evenly;
      padding-top: 60px;
      
      span {
        font-size: 1.3rem;
      }
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
    setError(); // reset it after last submit
    let id = localStorage.getItem('id');
    for(let key in content) {
      if(key !== 'trip_type' && !content[key]) {
        setError(`Error: ${key} field incorrect.`);
        return false;
      }
    }
    if(!error) {
      let date = `${new Date()}`;
      let send = {...content, user_id: id, date: date};
      let checkbox = document.querySelector('input[name=trip_type]');
      if(!checkbox.checked) send.trip_type = 'Professional';
      else send.trip_type = 'Private';
      let post = await axios.post('https://guidr-backend-justin-chen.herokuapp.com/trips', send,
          {headers: {Authorization: localStorage.getItem('token')}}
      );
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
            <h2>New Trip</h2>
            {error ? <Error>error</Error> : null}
            <input id='ct-title' type='text' placeholder='Title' name='title' onChange={updateInput} value={content.title} />
            <input id='ct-loc' type='text' placeholder='Location' name='location' onChange={updateInput} value={content.location} />
            <input id='ct-mt' type='number' placeholder='Miles Traveled' name='miles' onChange={updateInput} value={content.miles} />
            <input id='ct-desc' type='text' placeholder='Description' name='description' onChange={updateInput} value={content.description} />
            <div id='ct-type-container'>
              <span>Professional</span>
              <Checkbox toggle name='trip_type' />
              <span>Private</span>
            </div>

            <div id='btn-container'><button id='ct-submit' onSubmit={e => e.preventDefault()}>Submit</button></div>
          </fieldset>
        </FormStyled>
      </FormContainer>
  );
}