import React from "react";
import { useMediaQuery } from "react-responsive";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../constants/common";
import JobsGrid from "./JobsGrid/JobsGrid";
import JobsHeader from "./JobsHeader/JobsHeader";
import JobsMidBar from "./JobsMidBar/JobsMidBar";
import JobsTopBar from "./JobsTopBar/JobsTopBar";

const Styled = styled.div``;

export default function JobListPage() {
  const [searchParams, ] = useSearchParams();
  const query = decodeURIComponent(searchParams.get("query"))
  const isScreenLarge = useMediaQuery({
    query: `(min-width: ${breakpoints.large}px)`,
  });
  return (
    <Styled>
      <JobsHeader query={query} />
      <JobsTopBar />
      {isScreenLarge && <JobsMidBar />}
      <JobsGrid />
    </Styled>
  );
}
