import React from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../constants/common";
import JobsGrid from "./JobsGrid/JobsGrid";
import JobsHeader from "./JobsHeader/JobsHeader";
import JobsMidBar from "./JobsMidBar/JobsMidBar";
import JobsTopBar from "./JobsTopBar/JobsTopBar";

const Styled = styled.div``;

export default function JobListPage() {
  const params = useParams();
  console.log({ params });
  const isScreenLarge = useMediaQuery({
    query: `(min-width: ${breakpoints.large}px)`,
  });
  return (
    <Styled>
      <JobsHeader query={params.jobQuery} />
      <JobsTopBar />
      {isScreenLarge && <JobsMidBar />}
      <JobsGrid />
    </Styled>
  );
}
