import React from "react";
import styled from "styled-components";
import JobCatRelatedItem from "./JobCatRelatedItem";
const Styled = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 3rem;
  .heading {
    text-align: center;
    margin-bottom: 3rem;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 600px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
`;
export default function JobCatBottom({ relatedList, name }) {
  return (
    <Styled>
      <h4 className="heading">Services Related To {name}</h4>
      <div className="wrapper">
        {relatedList.map((ele) => (
          <JobCatRelatedItem key={ele.id} name={ele.name} />
        ))}
      </div>
    </Styled>
  );
}
