import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import JobsGrid from "./JobsGrid/JobsGrid";
import JobsHeader from "./JobsHeader/JobsHeader";
import JobsTopBar from "./JobsTopBar/JobsTopBar";

const Styled = styled.div``;

export default function JobListPage() {
  const params = useParams();
  console.log({ params });
  return (
    <Styled>
      <JobsHeader query={params.jobQuery} />
      <JobsTopBar />
      <JobsGrid/>
    </Styled>
  );
}
