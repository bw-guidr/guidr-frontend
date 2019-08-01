import React, {useState,useEffect} from 'react'
import { Card, Button, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'
import placeholderImg from '../Assets/Trips/eheE9Nxg.png'
import './Fonts.css';
import Palette from './Palette';


const Container = styled.div`
  width: 200px;
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

export default function PortfolioCard (props) {
  const [thisTrip, setThisTrip] = useState({description:'',title:'',miles:''});

  useEffect(() => {
    setThisTrip(props.tripToEdit);
  },[props.tripToEdit])
  
  console.log('Props:', props)
  console.log('thisTrip:', thisTrip)
  return (
    <Container>
      {props.editNum === props.id ? (
      <>
        <FormStyled id='trip-form'>
          <fieldset>
          <h2>Edit Trip</h2>
          <input id='ct-title' label='Title' type='text' 
          name='title' value={thisTrip.title} 
          onChange={(e) => editHandler(e)} size='mini'/>
          <input id='ct-desc' label='Description' type='text' 
          name='description' value={thisTrip.description} 
          onChange={(e) => editHandler(e)} size='mini'/>
          <input id='ct-mt' label='Miles' type='text' 
          name='miles' value={thisTrip.miles} 
          onChange={(e) => editHandler(e)} size='mini'/>
          <div id='btn-container'>
              <button id='ct-submit' color='yellow' onClick={() => props.toggleEdit(props.id)}>Cancel</button>
              <button id='ct-submit' onClick={(e) => props.editTrip(e, thisTrip)}>Submit</button>
          </div> 
        </fieldset>
        </FormStyled>
      </>
      ) : (
      <>
      <div className='image'><img src={placeholderImg}/></div>
      <Card.Content className='pTripContent'>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra className="pTripContent">
        <ul>
          <li>Miles: {props.miles}</li>
          <li>Location: {props.location}</li>
        </ul>
      </Card.Content>
      <Card.Content extra>
      <Button.Group compact widths={2}>
        <div className='ui green button' color='green' onClick={(e) => props.toggleEdit(props.id)}>Edit</div>
        <div className='ui red button'  onClick={(e) => props.removeTrip(e, props.id)}>Remove</div>
        </Button.Group> 
        <div id='ct-type-container'>
              <span>Professional</span>
              <Checkbox toggle name='trip_type' />
              <span>Private</span>
            </div>
      </Card.Content>
      </>
    )}
     <div id='ct-type-container'>
              <span>Professional</span>
              <Checkbox toggle name='trip_type' />
              <span>Private</span>
            </div>
    </Container>
  );
  
  function editHandler(e) {
    setThisTrip({...thisTrip, [e.target.name]:e.target.value});
  }
  function togglePro(id) {
    props.trip_type === "Professional" ? 
    setThisTrip({...thisTrip, trip_type:"Private"}) 
    : setThisTrip({...thisTrip, trip_type:"Professional"});
  
  }
}
