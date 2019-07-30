import React from 'react'
import Header from './Header';
import Body from './Layout';
import PortfolioGrid from './PortfolioGrid'
import TripForm from './TripForm';


export default function Portfolio(){
    return(
        <Body>
          <Header />
          <main className='home-content'>
              <TripForm/>
              <PortfolioGrid />
          </main>
        </Body>
    )
}
