import React from 'react'
import Header from './Header';
import Body from './Layout';
import PortfolioGrid from './PortfolioGrid'
import TripForm from './TripForm';
import Profile from './Profile';
import styled from 'styled-components';




export default function Portfolio(props){
    return(
        <Body>
          <Header />
          <main className='home-content'>
              <Profile {...props} />
              <h2>Tours</h2>
              <PortfolioGrid />
          </main>
        </Body>
    )
}
