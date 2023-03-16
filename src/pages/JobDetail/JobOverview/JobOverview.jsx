import { Divider } from "antd";
import React from "react";
import styled from "styled-components";
import JobDetailGallery from "./JobDetailGallery";
import JobOverviewTop from "./JobOverviewTop";

export default function JobOverview() {
  return (
    <Styled>
      <h4 className="job-title">JobTitle</h4>
      <JobOverviewTop />
      <Divider />
      <JobDetailGallery />
    </Styled>
  );
}

const Styled = styled.div`
  margin: 1rem 0;
  /* padding-right: 10%; */
  .job-title {
    padding-bottom: 1rem;
    font-size: 24px;
  }
  @media screen and (min-width: 600px) {
    .job-title {
      font-size: 28px;
    }
  }
`;
