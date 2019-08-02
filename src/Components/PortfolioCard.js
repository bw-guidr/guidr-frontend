import React, { useState, useEffect } from "react";
import { Card, Button, Checkbox, Icon } from "semantic-ui-react";
import styled from "styled-components";
import placeholderImg from "../Assets/Trips/eheE9Nxg.png";
import "./Fonts.css";
import Palette from "./Palette";
import axios from "axios";

import ImgArr from "../Assets/Trips/ImgArr";

const randomImg = () => {
  return ImgArr[Math.floor(Math.random() * ImgArr.length)];
};


const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 50px 50px;
  div#image {
    width: 200px;
    height: auto;
  }
`;

const FormStyled = styled.form`
  font-family: "Montserrat", serif;
  width: 50%;

  fieldset {
    border: 0;
    display: flex;
    flex-wrap: wrap;

    h2 {
      font-family: "Montserrat", serif;
      width: 100%;
      text-align: center;
    }
    input {
      font-family: "Montserrat", serif;
      width: 100%;
      margin: 5px 0;
      border-radius: 10px;
      height: 30px;
      border: 1px solid #424242;
      padding: 5px;
    }
    input#ct-title,
    input#ct-loc {
      width: 40%;
    }
    input#ct-desc {
      height: 100px;
    }
    #btn-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 30px;

      button#ct-submit {
        width: 110px;
        height: 40px;
        font-size: 1.5rem;
        background: ${Palette.secondary.highlight};
        border: 0;
        border-radius: 3px;
      }

      button#remove {
        width: 120px;
        height: 40px;
        font-size: 1.5rem;
        background: red;
        color: white;
        border: 0;
        border-radius: 3px;
        margin-top: 10px;
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

export default function PortfolioCard(props) {
  const [thisTrip, setThisTrip] = useState({ ...props });
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setThisTrip(props.tripToEdit);
  }, [props.tripToEdit]);

  return (
    <Container>
      {props.editNum === props.id ? (
        <>
          <FormStyled id="trip-form">
            <fieldset>
              <h2>Edit Trip</h2>
              <input
                id="ct-title"
                label="Title"
                type="text"
                name="title"
                value={thisTrip.title}
                onChange={e => editHandler(e)}
                size="mini"
              />
              <input
                id="ct-desc"
                label="Description"
                type="text"
                name="description"
                value={thisTrip.description}
                onChange={e => editHandler(e)}
                size="mini"
              />
              <input
                id="ct-mt"
                label="Miles"
                type="text"
                name="miles"
                value={thisTrip.miles}
                onChange={e => editHandler(e)}
                size="mini"
              />
              <div id="ct-type-container">
              <span>Private</span>
              
              {props.trip_type === "Professional" ? (
                <>
                <Checkbox
                toggle
                checked={checked}
                name="trip_type"
                onClick={e => [togglePro(e), setChecked(false)]}/>
                </>
              ):(
                <>
                <Checkbox
                toggle
                name="trip_type"
                onClick={e => togglePro(e)}/>
                </>
              )}
                <span>Professional</span>
              </div>
              <div id="btn-container">
                <button
                  id="ct-submit"
                  color="yellow"
                  onClick={() => props.toggleEdit(props.id)}
                >
                  Cancel
                </button>
                <button
                  id="ct-submit"
                  onClick={e => [props.editTrip(e, thisTrip), setChecked(thisTrip.trip_type==="Professional")]}
                >
                  Submit
                </button>
                <button
                  id="remove"
                  onClick={e => props.removeTrip(e, props.id)}
                >
                  Remove
                </button>
                {/* <Icon
                  link
                  circular
                  size="large"
                  inverted
                  color="grey"
                  name="remove"
                /> */}
              </div>
            </fieldset>
          </FormStyled>
        </>
      ) : (
        <>
          <div className="card-image">
            <img
        
        alt="Trip scenery"
        src={randomImg()}
        
      />
          </div>
          <Card.Content className="pTripContent">
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
            {/* <Button.Group compact widths={2}>
              <Button icon > */}
            <Icon
              link
              circular
              size="large"
              inverted
              color="grey"
              name="pencil circle"
              onClick={e => props.toggleEdit(props.id)}
            />
            {/* </Button> */}
            {/* <Button icon > */}
            {/* </Button>
            </Button.Group> */}
          </Card.Content>
        </>
      )}
    </Container>
  );

  function editHandler(e) {
    setThisTrip({ ...thisTrip, [e.target.name]: e.target.value });
  }

  function togglePro(e) {
    console.log('Props:', props.trip_type)
    console.log('thisTrip:', thisTrip.trip_type)
    let pro = {...thisTrip, };
    let checkbox2 = document.querySelector('input[name=trip_type]');
    if(!checkbox2.checked) pro.trip_type = 'Professional';
      else pro.trip_type = 'Private';
      setThisTrip(pro);
      console.log('trip-type:', thisTrip.trip_type)
  }
}


