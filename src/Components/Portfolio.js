import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Layout";
import PortfolioGrid from "./PortfolioGrid";
import TripForm from "./TripForm";
import Profile from "./Profile";
import Footer from "./Footer";
import styled from "styled-components";

export default function Portfolio(props) {
  const [update, setUpdate] = useState();

  return (
    <Body>
      <Header />
      <main className="home-content">
        <Profile {...props} />
        <h2>Tours</h2>

        <PortfolioGrid update={update} />
        <TripForm setUpdate={setUpdate} />
      </main>
      <Footer />
    </Body>
  );
}
