import React from "react";
import styled from "styled-components";
import { jobs } from "./data";
import JobsItem from "./JobsItem/JobsItem";

const Styled = styled.div`
  .jobs-wrapper {
    margin-top: 1rem;
    min-height: 370px;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-gap: 0.75rem;
  }
  @media only screen and (min-width: 600px) {
    .jobs-wrapper {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
  }
  @media only screen and (min-width: 900px) {
    .jobs-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (min-width: 1160px) {
    .jobs-wrapper {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2rem;
    }
  }
`;

export default function JobsGrid() {
  return (
    <Styled className="content-row">
      <div className="jobs-wrapper">
        {jobs.map((ele, idx) => {
          // console.log({ele});
          const { congViec: job, avatar, ...meta } = ele;
          return <JobsItem job={job} avatar={avatar} key={idx} meta={meta} />;
        })}
      </div>
    </Styled>
  );
}
