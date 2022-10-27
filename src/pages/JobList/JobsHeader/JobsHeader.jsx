import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  padding-top: 32px;
  padding-bottom: 12px;
  span {
    color: #000;
    font-size: 32px;
    line-height: 150%;
    font-weight: 700;
  }
`;

export default function JobsHeader({ query }) {
  return (
    <Styled className="max-width-container">
      <span>Results for "{query}"</span>
    </Styled>
  );
}
