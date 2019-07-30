import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import styled from 'styled-components';

const CardStyled = styled(Card)`
  &&& {
    width: 25%;
  }
`;

export default function TripCard (data) {
  return(
  <CardStyled>
    {/* <Image src={data.img} wrapped ui={false} /> */}
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>{data.description}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        {/* Insert author somewhere, through data.user_id */}
        <Icon name='user' />
        <ul>
          <li>Miles: {data.miles}</li>
          <li>Location: {data.location}</li>
        </ul>
      </a>
    </Card.Content>
  </CardStyled>
  )
}