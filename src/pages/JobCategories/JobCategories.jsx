import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getJobCatRenderDataById } from "../../services/jobCategory";
import JobCatBody from "./Body/JobCatBody";
import JobCatBottom from "./Bottom/JobCatBottom";
import { defaultJobCat, defaultPopularServices } from "./data/defaultData";
import JobCatTop from "./Top/JobCatTop";

const Styled = styled.div`
  display: block;
`;

export default function JobCategories() {
  const { jobCatId } = useParams();
  const [data, setData] = useState({});
  const fetchData = async (id) => {
    const result = await getJobCatRenderDataById(id);
    // console.log(result.data.content);
    setData(result.data.content);
  };
  useEffect(() => {
    fetchData(jobCatId);
  }, [jobCatId]);
  const render = ({
    id,
    name,
    job_cat_banner,
    related_service,
    popular_service,
  }) => {
    const banner = Array.isArray(job_cat_banner) && job_cat_banner[0];
    return (
      <>
        <JobCatTop
          name={name}
          banner={banner}
          popularList={popular_service || []}
        />
        <JobCatBody id={id || 1} />
        <JobCatBottom name={name} relatedList={related_service || []} />
      </>
    );
  };
  // const { name, banner } = defaultJobCat;

  return <Styled className="content-row">{data && render(data)}</Styled>;
}
