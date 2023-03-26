import React from "react";
import { useParams } from "react-router-dom";
import EmptySellingJobIcon from "../../../../components/Svg/EmptySellingJobIcon";
import { useAsync } from "../../../../hooks/useAsync";
import { getJobsByUserApi } from "../../../../services/job";
import { jobs } from "../../../JobList/JobsGrid/data";
import UserJobsSection from "../UserJobsSection/UserJobsSection";

export default function SellingGigs({ sectionTitle }) {
  const { userName } = useParams();
  const { state: sellingJobs } = useAsync({
    service: () => getJobsByUserApi({ userName }),
  });
  const jobList = sellingJobs || jobs.slice(2, 3);
  const emptyState = {
    Icon: EmptySellingJobIcon,
    heading: "Ready to earn on your own terms",
    buttonText: "Become a seller",
  };
  return (
    <div>
      <UserJobsSection
        listData={jobList}
        sectionTitle={sectionTitle || "My Selling Gigs"}
        emptyState={emptyState}
      />
    </div>
  );
}
