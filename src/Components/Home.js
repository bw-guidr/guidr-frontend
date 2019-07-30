import React from 'react'
import Header from './Header';
import Body from './Layout';
import axios from 'axios';
import TripCard from './TripCard';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      success: 0
    };
    this.getAllTrips();
  }

  getAllTrips = async () => {
    let res = await axios.get('https://guidr-backend-justin-chen.herokuapp.com/trips/all');
    console.log(res.data);
    let prof = res.data.filter(c => c.trip_type === 'Professional');
    console.log(prof);
    this.setState({trips: prof, success: 1});
  };

  render(){
    return(
        <Body>
          <Header />
          <main className='home-content'>
            <article>
              { this.state.success ? this.state.trips.map(o => <TripCard {...o} key={o.id} />) : null }
              Placeholder text
            </article>
          </main>
        </Body>
    )
  }
}

export default Home