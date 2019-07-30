import React { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormStyled = styled.form`
  border: 1px solid black;
`;

const Error = styled.div`
  background: red;
`;

export default function TripForm() {
  const [content, setContent] = useState({});
  const [error, setError] = useState();

  const clearForm = () => {
    setContent({});
  };

  const submitTrip = async (event) => {
    console.log(event);
    setError(); // reset it after last submit
    let id = localStorage.getItem('id');
    for(let key in content) {
      if(key !== 'img' && !content[key]) {
        setError(`Error: ${key} field incorrect.`);
        return false;
      }
    }
    if(!error) {
      let post = await axios.post('https://guidr-backend-justin-chen.herokuapp.com/trips', {...content, id: id});
      console.log(post);
      clearForm();
      return true;
    }
  };

  const updateInput = event => {
    setContent({...content, [event.target.name]: event.target.value});
  };


  return (
      <FormStyled onSubmit={submitTrip}>
        <fieldset>
          <legend>Create a Trip</legend>
          {error ? <Error>error</Error> : null}
          <input type='text' placeholder='Title' name='title' onChange={updateInput} value={content.title} />
          <input type='text' placeholder='Location' name='location' onChange={updateInput} value={content.location} />
          <input type='text' placeholder='Description' name='description' onChange={updateInput} value={content.description} />
          <input type='number' placeholder='Miles Traveled' name='miles' onChange={updateInput} value={content.miles} />
          <input type='text' placeholder='Image URL' name='img' onChange={updateInput} value={content.img} />
          <button onSubmit={e => e.preventDefault()}>Submit</button>
        </fieldset>
      </FormStyled>
  );
}