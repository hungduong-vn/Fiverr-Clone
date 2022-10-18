import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import { columns } from "./data";

const StyledGrid = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  &::after {
    background-color: #e4e5e7;
    content: "";
    height: 1px;
    margin: 0 6px;
    width: 100%;
    @media only screen and (min-width: 600px) {
      margin: 0 0.5rem;
    }
    @media only screen and (min-width: 600px) {
      margin: 0 1rem;
    }
  }
`;
// console.log({ columns });
export default function FooterTop() {
  return (
    <StyledGrid className="grid-15">
      {columns.map((ele, idx) => (
        <FooterCol col={ele} key={idx} />
      ))}
    </StyledGrid>
  );
}
