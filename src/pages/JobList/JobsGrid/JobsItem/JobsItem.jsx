import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";
import JobsItemBody from "./JobsItemBody";
import JobsItemFoot from "./JobsItemFoot";
import JobsItemThumb from "./JobsItemThumb";

const Styled = styled.div`
  /* cursor: pointer; */
  border: 1px solid ${styles.colorLight};
  &:hover {
    .jobs-name {
      color: ${styles.colorFiverr};
    }
    .jobs-item-thumb {
      img {
        transform: scale(1.1);
      }
    }
  }
`;
// Styled.displayName = "JobsItem"
export default function JobsItem({ job, avatar, meta }) {
  const seller = { name: meta.sellerName, avatar };
  const {
    id: jobId,
    reviewCount,
    name: jobName,
    rating,
    thumbUrl,
    price,
  } = job;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/user/${seller.name}/${jobId}`);
  };
  return (
    <Styled>
      <JobsItemThumb img={thumbUrl} handleClick={handleClick} />
      <JobsItemBody
        seller={seller}
        jobName={jobName}
        star={rating}
        reviewCount={reviewCount}
        handleClick={handleClick}
      />
      <JobsItemFoot price={price} jobId={jobId} />
    </Styled>
  );
}
