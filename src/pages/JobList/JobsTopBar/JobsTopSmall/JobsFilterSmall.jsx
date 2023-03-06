import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  width: calc(50% - 5px);
  button {
    &:before {
      content: "";
      background: transparent
        url(https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/filter-green.09b848a.svg)
        no-repeat 0 0;
      background-size: 18px;
      fill: #1dbf73;
      width: 18px;
      height: 19px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
`;

export default function JobsFilterSmall() {
  return (
    <Styled>
      <button className="jobs-top-small-btn">Filter</button>
    </Styled>
  );
}
