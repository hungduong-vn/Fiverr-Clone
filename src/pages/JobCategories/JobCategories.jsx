import React from "react";
import styled from "styled-components";
import JobCatBody from "./Body/JobCatBody";
import JobCatBottom from "./Bottom/JobCatBottom";
import { defaultJobCat, defaultPopularServices } from "./data/defaultData";
import JobCatTop from "./Top/JobCatTop";

const Styled = styled.div`
  display: block;
`;

export default function JobCategories() {
  const { name, banner } = defaultJobCat;
  return (
    <Styled className="content-row">
      <JobCatTop name={name} banner={banner} />
      <JobCatBody name={name} />
      <JobCatBottom name={name} popularList={defaultPopularServices} />
    </Styled>
  );
}
