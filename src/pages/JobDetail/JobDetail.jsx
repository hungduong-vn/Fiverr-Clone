import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants/common";
import AboutThisJob from "./AboutThisJob/AboutThisJob";
import JobDetailBreadcrumbs from "./JobDetailBreadcrumbs";
import JobDetailNav from "./JobDetailNav/JobDetailNav";
import JobOverview from "./JobOverview/JobOverview";
import JobPlans from "./JobPlans/JobPlans";
import JobReviews from "./JobReviews/JobReviews";
import AboutThisSeller from "./AboutThisSeller/AboutThisSeller";

export default function JobDetail() {
  const jobOverviewRef = useRef();
  const aboutThisJobRef = useRef();
  const aboutThisSellerRef = useRef();
  const jobReviewsRef = useRef();
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections([
      {
        tabText: "Overview",
        id: "jobOverview",
        offsetTop: 0,
      },
      {
        tabText: "Description",
        id: "aboutThisJob",
        offsetTop: aboutThisJobRef.current.offsetTop,
      },
      {
        tabText: "About the Seller",
        id: "aboutThisSeller",
        offsetTop: aboutThisSellerRef.current.offsetTop,
      },
      {
        tabText: "Reviews",
        id: "jobReviews",
        offsetTop: jobReviewsRef.current.offsetTop,
      },
    ]);
  }, []);
  return (
    <Styled>
      {sections.length > 0 && <JobDetailNav sections={sections} />}
      <div className="max-width-container job-detail-content">
        <JobDetailBreadcrumbs />
        <div className="jobDetail-scroll-section" id="jobOverview" ref={jobOverviewRef}>
          <JobOverview />
        </div>
        <JobPlans />
        <div className="jobDetail-scroll-section" id="aboutThisJob" ref={aboutThisJobRef}>
          <AboutThisJob />
        </div>
        <div className="jobDetail-scroll-section" id="aboutThisSeller" ref={aboutThisSellerRef}>
          <AboutThisSeller />
        </div>
        <div className="jobDetail-scroll-section" id="jobReviews" ref={jobReviewsRef}>
          <JobReviews />
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  @media screen and (min-width: ${breakpoints.extraLarge}px) {
    /* padding-top: 3rem; */
    padding-bottom: 3rem;
  }
  .sticky + .job-detail-content {
    padding-top: 53px;
  }
  .jobDetail-scroll-section {
    padding-top: 53px;
  }
`;
