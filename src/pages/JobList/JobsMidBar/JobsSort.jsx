import React from "react";
import styled from "styled-components";
import DropDownAnt from "../../../components/Home/DropDownAntd/DropDownAntd";

const Styled = styled.div`
display: flex;
align-items: center;
  .jobs-sort-title {
    font-size: 1rem;
    line-height: 120%;
    font-weight: 400;
  }
  .jobs-sort-dropdown {
    padding: 10px 0;
    margin: 0 6px;
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
      <div className="jobs-sort-dropdown">
        <DropDownAnt
          title={<span className="jobs-sort-criterion">{criterion}</span>}
        />
      </div>
    </Styled>
  );
}
