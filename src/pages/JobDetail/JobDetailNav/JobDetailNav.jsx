import { Divider } from "antd";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { breakpoints } from "../../../constants/common";
import JobNavScroll from "../JobNavScroll/JobNavScroll";
import JobsDetailActions from "./JobsDetailActions";

export default function JobDetailNav({ sections }) {
  const isScreenMedium = useMediaQuery({
    query: `(min-width : ${breakpoints.medium}px)`,
  });
  return (
    <Styled>
      <div className="max-width-container">
        <header>
          <JobNavScroll sections={sections} />
        </header>
        {isScreenMedium && <JobsDetailActions />}
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e4e5e7;
  .max-width-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: scroll;
    padding-bottom: 0;
  }
  @media only screen and (max-width: 599px) {
    .max-width-container {
      padding: 0;
    }
    header {
      margin: 0 auto;
    }
  }
`;
