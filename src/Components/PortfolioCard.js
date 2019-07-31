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
  <div className='ui card'>
    {props.editNum === props.id ? (
    <>
     <div className='content'>
        <form className='ui form'>
          <div className='field'>
            <label>Title</label>
            <input type='text' name='title' value={thisTrip.title} onChange={(e) => editHandler(e)} size='mini'/>
          </div>
          <div className='field'>
            <label>Description</label>
            <input type='text' name='description' value={thisTrip.description} onChange={(e) => editHandler(e)} size='mini'/>
          </div>
          <div className='field'>
            <label>Miles</label>
            <input type='text' name='miles' value={thisTrip.miles} onChange={(e) => editHandler(e)} size='mini'/>
          </div>
        </form>
      <div className='extra content'>
        <Button.Group compact widths={2}>
            <Button basic color='yellow' onClick={() => props.toggleEdit(props.id)}>Cancel</Button>
            <Button color='green' onClick={(e) => props.editTrip(e, thisTrip)}>Submit</Button>
        </Button.Group> 
      </div>
      </div>
    </>
    ) : (
    <>
    <div className='image'><img src={placeholderImg}/></div>
    <div className='content'>
      <a className='header'>{props.title}</a>
      <div className='meta'>{props.location}</div>
      <button className="ui toggle button" color='blue'>Pro</button>
      <div className='description'>{props.description}</div>
    </div>
    <div className='extra content'>
      <a>
        <Icon name='user' />
        {props.miles}
      </a>
    </div>
    <div className='extra content'>
    <div className='ui two buttons'>
      <div className='ui green button' color='green' onClick={(e) => props.toggleEdit(props.id)}>Edit</div>
      <div className='ui red button'  onClick={(e) => props.removeTrip(e, props.id)}>Remove</div>
    </div>
    </div>
    </>
  )}
  </div>
  );
  
  function editHandler(e) {
    setThisTrip({...thisTrip, [e.target.name]:e.target.value});
  }
}
