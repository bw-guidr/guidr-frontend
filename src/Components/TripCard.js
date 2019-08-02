import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";
import ImgArr from "../Assets/Trips/ImgArr";

console.log(ImgArr);

const randomImg = () => {
  return ImgArr[Math.floor(Math.random() * ImgArr.length)];
};
console.log(randomImg());

const CardStyled = styled(Card)`
  &&& {
    width: 250px;
    margin: 50px;
  }
`;


export default function TripCard(data) {
  return (
    <CardStyled>
      <Image 
        id="home-img"
        alt="Trip scenery"
        src={randomImg()}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{data.title}</Card.Header>
        <Card.Description>{data.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          {/* Insert author somewhere, through data.user_id */}
          <Icon name="user" />
          <ul>
            <li>Miles: {data.miles}</li>
            <li>Location: {data.location}</li>
          </ul>
        </a>
      </Card.Content>
    </CardStyled>
  );
}
