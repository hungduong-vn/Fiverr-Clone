import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { breakpoints } from "../../../constants/common";
import { defaultCategories } from "../data/defaultData";
import JobCatGrid from "./JobCatGrid";

const Styled = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 5.5rem;
`;

export default function JobCatBody({ name }) {
  const isGrid = useMediaQuery({
    query: `(min-width: ${breakpoints.medium}px)`,
  });
  const jobSubcatList = defaultCategories.filter((ele) => ele.name === name)[0]
    .job_subcat_list;
  console.log(jobSubcatList);
  return (
    <Styled>
      <h2 className="text-display-4">Explore {name}</h2>
      <JobCatGrid list={jobSubcatList} />
    </Styled>
  );
}
