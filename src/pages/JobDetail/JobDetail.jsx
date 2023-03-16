import styled from "styled-components";
import { breakpoints } from "../../constants/common";
import AboutThisJob from "./AboutThisJob/AboutThisJob";
import JobDetailBreadcrumbs from "./JobDetailBreadcrumbs";
import JobDetailNav from "./JobDetailNav/JobDetailNav";
import JobOverview from "./JobOverview/JobOverview";
import JobPlans from "./JobPlans/JobPlans";
import JobReviews from "./JobReviews/JobReviews";
import AboutThisSeller from "./AboutThisSeller/AboutThisSeller";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { getJobById } from "../../services/job";
import { sections } from "./data";
import { useMediaQuery } from "react-responsive";

export default function JobDetail() {
  const { userId, jobId } = useParams();
  const { state: job } = useAsync({ service: () => getJobById(+jobId) });
  console.log(job);

  const isScreenLarge = useMediaQuery({
    query: `(min-width : ${breakpoints.large}px)`,
  });

  return (
    <Styled>
      <JobDetailNav sections={sections} />
      <div className="max-width-container job-detail-wrapper">
        <div className="job-detail-col-left">
          <JobDetailBreadcrumbs
            serviceName={job?.serviceName}
            jobCategoryName={job?.jobCategoryName}
            jobSubCategoryName={job?.jobSubCategoryName}
            jobCategoryId={job?.jobCategoryId}
          />
          <div id="jobOverview">
            <JobOverview />
            {!isScreenLarge && <JobPlans />}
          </div>
          <div id="aboutThisJob">
            <AboutThisJob />
          </div>
          <div id="aboutThisSeller">
            <AboutThisSeller userId={userId} />
          </div>
          <div id="jobReviews">
            <JobReviews />
          </div>
        </div>
        {isScreenLarge && (
          <div className="job-detail-col-right">
            <JobPlans />
          </div>
        )}
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  .job-detail-wrapper {
    display: flex;
  }
  .job-detail-col-left {
    width: 100%;
  }
  .max-width-container {
    padding-top: 0;
  }
  @media screen and (min-width: ${breakpoints.large}px) {
    .job-detail-col-left {
      padding-right: 1rem;
      width: 60%;
    }
    .job-detail-col-right {
      padding-left: 1rem;
      flex-grow: 1;
    }
  }
  @media screen and (min-width: ${breakpoints.extraLarge}px) {
    padding-bottom: 3rem;
    .job-detail-col-left {
      width: 66.67%;
    }
  }
`;
