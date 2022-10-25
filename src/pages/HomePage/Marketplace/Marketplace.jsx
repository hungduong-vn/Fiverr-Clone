import React from "react";
import styled from "styled-components";
import MarketplaceGrid from "./MarketplaceGrid";

const Styled = styled.div`
  h2 {
    padding-bottom: 20px;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    h2 {
      padding-bottom: 24px;
    }
  }
`;

export default function Marketplace() {
  return (
    <Styled className="max-width-container main-section">
      <h2>Explore the marketplace</h2>
      <MarketplaceGrid/>
    </Styled>
  );
}
