import React from "react";
import styled from "styled-components";
import JobCatPopularItem from "./JobCatPopularItem";
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
export default function JobCatBottom({ popularList, name }) {
  return (
    <Styled>
      <h4 className="heading">Services Related To {name}</h4>
      <div className="wrapper">
        {popularList.map((ele) => (
          <JobCatPopularItem key={ele.id} name={ele.name} />
        ))}
      </div>
    </Styled>
  );
}
