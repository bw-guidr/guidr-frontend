import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Layout";
import PortfolioGrid from "./PortfolioGrid";
import TripForm from "./TripForm";
import Profile from "./Profile";
import Footer from "./Footer";
import styled from "styled-components";

const PortfolioDiv = styled.div `
    max-width: 70%;
    margin:0 auto;
`

export default function Portfolio(props) {
  const [update, setUpdate] = useState();

  return (
    <Body>
      <Header />
      <main className="home-content">
        <Profile {...props} />
        <h2>Tours</h2>
        <PortfolioDiv>
          <PortfolioGrid update={update} />
          <TripForm setUpdate={setUpdate} />
        </PortfolioDiv>
      </main>
      <Footer />
    </Body>
  );
}
