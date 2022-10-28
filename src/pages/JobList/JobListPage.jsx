import React from "react";
import { useParams } from "react-router-dom";
import JobsHeader from "./JobsHeader/JobsHeader";

export default function JobListPage() {
  const params = useParams();
  console.log({ params });
  return (
    <>
      <JobsHeader query={params.jobQuery} />
    </>
  );
}
