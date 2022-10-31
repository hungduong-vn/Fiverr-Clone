import React from "react";
import styled from "styled-components";
import JobsResult from "./JobsResult";
import JobsSort from "./JobsSort";

const Styled = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function JobsMidBar() {
  return (
    <Styled>
      <JobsResult count={133}/>
      <JobsSort />
    </Styled>
  );
}
