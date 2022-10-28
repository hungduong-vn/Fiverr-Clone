import React, { useRef } from "react";
import styled from "styled-components";
import JobsFilter from "./JobsFilter/JobsFilter";
import JobsTogglers from "./JobsTogglers/JobsTogglers";

const Styled = styled.div`
  position: sticky;
  top: 0;
  .jobs-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
`;

export default function JobsTopBar() {
  const topRef = useRef(null);

  return (
    <Styled ref={topRef}>
      <div className="max-width-container jobs-top-bar">
        <JobsFilter />
        <JobsTogglers />
      </div>
    </Styled>
  );
}
