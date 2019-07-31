import React, {useState,useEffect} from 'react'
import { Card, Icon, Image, Button, Form } from 'semantic-ui-react'
import { defaultProps } from 'recompose';


export default function PortfolioCard (props) {
  const [thisTrip, setThisTrip] = useState({description:'',title:'',miles:''});

  useEffect(() => {
    setThisTrip(props.tripToEdit);
  },[props.tripToEdit])
  
  return (
  <Card>
    {props.editNum === props.id ? (
    <>
     <Card.Content>
        <Form>
            <Form.Input label='Title' name='title' value={thisTrip.title} onChange={(e) => editHandler(e)} size='mini'/>
            <Form.Input label='Description' name='description' value={thisTrip.description} onChange={(e) => editHandler(e)} size='mini'/>
            <Form.Input label='Miles' name='miles' value={thisTrip.miles} onChange={(e) => editHandler(e)} size='mini'/>
        </Form>
    </Card.Content>
    <Card.Content extra>
        <Button.Group compact widths={2}>
            <Button basic color='yellow' onClick={() => props.toggleEdit(props.id)}>Cancel</Button>
            <Button color='green' onClick={(e) => props.editTrip(e, thisTrip)}>Submit</Button>
        </Button.Group> 
    </Card.Content>
    </>
    ) : (
    <>
    <Image src={props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Button className="ui toggle button" color='white'>Pro</Button>
      <Card.Meta>{props.description}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {props.miles}
      </a>
    </Card.Content>
    <Button.Group compact widths={2}>
      <Button color='green' onClick={(e) => props.toggleEdit(props.id)}>Edit</Button>
      <Button color='red'  onClick={(e) => props.removeTrip(e, props.id)}>Remove</Button>
    </Button.Group>
    </>
  )}
  </Card>
  );
  
  function editHandler(e) {
    setThisTrip({...thisTrip, [e.target.name]:e.target.value});
  }
}
