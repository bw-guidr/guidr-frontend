import React from 'react'
import Header from './Header';
import Body from './Layout';
import PortfolioGrid from './PortfolioGrid'


export default function Portfolio(){
    return(
        <Body>
          <Header />
          <main className='home-content'>
              <PortfolioGrid />
          </main>
        </Body>
    )
}
