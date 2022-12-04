import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getJobCats } from "../../../services/jobCategory";
import { marketList } from "./data";
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
      {marketList.map((ele, idx) => (
        <MarketplaceItem
          key={idx}
          text={ele.text}
          // text={jobCats.length > 0 ? jobCats[idx].name : ele.text}
          iconUrl={ele.iconUrl}
        />
      ))}
    </Styled>
  );
}
