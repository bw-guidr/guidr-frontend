import React, {useState,useEffect} from 'react'
import { Card, Icon, Image, Button, Form } from 'semantic-ui-react'
import placeholderImg from '../Assets/Trips/eheE9Nxg.png'

export default function PortfolioCard (props) {
  const [thisTrip, setThisTrip] = useState({description:'',title:'',miles:''});

  useEffect(() => {
    setThisTrip(props.tripToEdit);
  },[props.tripToEdit])
  
  console.log('Props:', props)
  console.log('thisTrip:', thisTrip)
  return (
    <Card className='pTripCard'>
      {props.editNum === props.id ? (
      <>
        <Card.Content>
          <Form>
            <Form.Input label='Title' type='text' 
            name='title' value={thisTrip.title} 
            onChange={(e) => editHandler(e)} size='mini'/>

            <Form.Input label='Description' type='text' 
            name='description' value={thisTrip.description} 
            onChange={(e) => editHandler(e)} size='mini'/>

            <Form.Input label='Miles' type='text' 
            name='miles' value={thisTrip.miles} 
            onChange={(e) => editHandler(e)} size='mini'/>
          </Form>
        </Card.Content>
        <Card.Content>
          <Button.Group compact widths={2}>
              <Button color='yellow' onClick={() => props.toggleEdit(props.id)}>Cancel</Button>
              <Button color='green' onClick={(e) => props.editTrip(e, thisTrip)}>Submit</Button>
          </Button.Group> 
        </Card.Content>
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
        <Button color='blue' className="proButton"  onClick={() => props.togglePro(props.id)}>Pro</Button>
      </Card.Content>
      </>
    )}
    </Card>
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
