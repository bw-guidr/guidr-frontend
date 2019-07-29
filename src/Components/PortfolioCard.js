import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function TripCard (data) {
  return(
  <Card>
    {//needs toggle button + remove/edit button}
    <Image src={data.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>{data.description}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {data.miles}
      </a>
    </Card.Content>
  </Card>
  )
}