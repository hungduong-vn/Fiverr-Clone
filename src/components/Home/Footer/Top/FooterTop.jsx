import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import { columns } from "./data";

const StyledGrid = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;
console.log({ columns });
export default function FooterTop() {
  return (
    <StyledGrid className="grid-15">
      {columns.map((ele, idx) => (
        <FooterCol col={ele} key={idx} />
      ))}
    </StyledGrid>
  );
}
