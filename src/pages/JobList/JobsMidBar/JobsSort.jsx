import React from "react";
import styled from "styled-components";
import DropDownAnt from "../../../components/Home/DropDownAntd/DropDownAntd";

const Styled = styled.div`
  .jobs-sort-title {
    font-size: 1rem;
    line-height: 120%;
    font-weight: 400;
  }
  .jobs-sort-criterion {
    color: #222325;
    font-size: 1rem;
    line-height: 120%;
    font-weight: 700;
  }
`;

export default function JobsSort() {
  const criterion = "Relevance";
  return (
    <Styled>
      <span className="jobs-sort-title">Sort by </span>
      <DropDownAnt
        title={<span className="jobs-sort-criterion">{criterion}</span>}
      />
    </Styled>
  );
}
