import React, { useEffect, useState } from 'react';
import Header from './Header';
import Body from './Layout';
import PortfolioGrid from './PortfolioGrid'
import TripForm from './TripForm';


export default function Portfolio(){
    const [update, setUpdate] = useState()
    return(
        <Body>
          <Header />
          <main className='home-content'>
              <TripForm setUpdate={setUpdate}/>
              <PortfolioGrid update={update} />
          </main>
        </Body>
    )
}
