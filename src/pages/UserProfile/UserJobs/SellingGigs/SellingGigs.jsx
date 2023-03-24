import React from "react";
import { jobs } from "../../../JobList/JobsGrid/data";
import UserJobsSection from "../UserJobsSection/UserJobsSection";

export default function SellingGigs({ sectionTitle }) {
  return (
    <div>
      <UserJobsSection
        listData={jobs.slice(2, 3)}
        sectionTitle={sectionTitle || "My Selling Gigs"}
      />
    </div>
  );
}
