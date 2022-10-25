import React from "react";
import styled from "styled-components";
import { marketList } from "./data";
import MarketplaceItem from "./MarketplaceItem";

const Styled = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default function MarketplaceGrid() {
  return (
    <Styled>
      {marketList.map((ele, idx) => (
        <MarketplaceItem key={idx} text={ele.text} iconUrl={ele.iconUrl} />
      ))}
    </Styled>
  );
}
