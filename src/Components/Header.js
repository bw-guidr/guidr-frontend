import React from 'react';
import Nav from './Navigation/Navbar';
import styled from 'styled-components';
import logo from '../Assets/GuidrLogo_White.svg';
import Palette from './Palette';

const HeaderDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background: ${Palette.neutral.mid};
  
  div.header-container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      max-width: 30%;
    }
  }
  

  
`;

export default function Header() {

  return (
      <HeaderDiv>
        <div className='header-container'>
          <img src={logo} alt='logo' />
          <Nav />
        </div>
      </HeaderDiv>
  );
}