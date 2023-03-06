import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getJobCats } from "../../../services/jobCategory";
import MarketplaceItem from "./MarketplaceItem";

const Styled = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default function MarketplaceGrid() {
  const [jobCats, setJobCats] = useState([]);
  const fetchData = async () => {
    const result = await getJobCats();
    // console.log({ result: result.data.content });
    setJobCats(result.data.content);
  };
  useEffect(() => {
    fetchData();
    // console.log(jobCats[0].name);
  }, []);

  return (
    <Styled>
      {jobCats.map((ele, idx) => (
        <MarketplaceItem
          key={idx}
          id={ele.id}
          text={ele.name}
          iconUrl={ele.iconUrl}
        />
      ))}
    </Styled>
  );
}
