import React from "react";
import styled from "styled-components";
import JobCatItem from "./Item/JobCatItem";

const Styled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1rem;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 4rem;
    margin-top: 1.5rem;
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
  }
`;

export default function JobCatGrid({ list }) {
  return (
    <Styled>
      {list.map((ele) => (
        <JobCatItem item={ele} key={ele.id} />
      ))}
    </Styled>
  );
}
