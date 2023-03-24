import React from "react";
import { jobs } from "../../../JobList/JobsGrid/data";
import UserJobsSection from "../UserJobsSection/UserJobsSection";

export default function HiredGigs() {
  return (
    <div>
      <UserJobsSection
        listData={jobs.slice(3, 5)}
        sectionTitle={"My Hired Gigs"}
      />
    </div>
  );
}
