import React, { useRef } from "react";
import styled from "styled-components";
import JobNavTabs from "./JobNavTabs";
import JobsDetailActions from "./JobsDetailActions";

export default function JobDetailNav({ sections }) {
  const jobNavRef = useRef();
  return (
    <Styled ref={jobNavRef}>
      <div className="jobNav-container">
        <div className="jobNav-content">
          {jobNavRef && (
            <JobNavTabs jobNavRef={jobNavRef} sections={sections} />
          )}
          <JobsDetailActions />
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #e4e5e7;
  .jobNav-container {
    padding: 0 2rem;
  }
  .jobNav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &.sticky {
    z-index: 1;
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
  }
  @media only screen and (min-width: 1160px) {
    .jobNav-container {
      margin: 0 auto;
      max-width: 1400px;
    }
  }
`;
