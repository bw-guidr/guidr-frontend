import React from 'react';
import Nav from './Navigation/Navbar';
import styled from 'styled-components';
import logo from '../Assets/GuidrLogo_White.svg';

const HeaderDiv = styled.div`
  width: 98%;
  padding: 10px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1c252c;
  
  img {
    max-width: 30%;
  }
  
`;

export default function Header() {

  return (
      <HeaderDiv>
        <img src={logo} alt='logo' />
        <Nav />
      </HeaderDiv>
  );
}