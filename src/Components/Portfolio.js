import React from 'react'
import Header from './Header';
import Body from './Layout';
import PortfolioGrid from './PortfolioGrid'


class Portfolio extends React.Component {
  render(){
    return(
        <Body>
          <Header />
          <main className='home-content'>
              <PortfolioGrid />
          </main>
        </Body>
    )
  }
}

export default Portfolio