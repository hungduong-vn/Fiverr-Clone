import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { getServiceByJobCatId } from "../../../services/service";
import JobCatGrid from "./JobCatGrid";

const Styled = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 5.5rem;
`;

export default function JobCatBody({ id }) {
  const [data, setData] = useState({});
  const fetchData = async (id) => {
    const result = await getServiceByJobCatId(id);
    setData(result.data.content);
  };
  const render = () => {
    const { name, job_subcategory: jobSubCatList } = data;
    return (
      <>
        <h2 className="text-display-4">Explore {name || ""}</h2>
        <JobCatGrid list={jobSubCatList || []} />
      </>
    );
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
  return <Styled>{data && render()}</Styled>;
}
