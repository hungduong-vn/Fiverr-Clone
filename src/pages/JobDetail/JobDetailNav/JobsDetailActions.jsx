import React from "react";
import { ShareAltOutlined, FlagOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { styles } from "../../../constants/styles";
import AddToWishList from "../../../components/Home/AddToWishList/AddToWishList";
import { useParams } from "react-router-dom";

export default function JobsDetailActions() {
  const {jobId} = useParams();
  return (
    <Styled>
      <div className="jobActions-item heart">
        <AddToWishList added={false} jobId={jobId}/>
      </div>
      <div className="jobActions-item regular">
        <FlagOutlined />
      </div>
      <div className="jobActions-item regular">
        <ShareAltOutlined />
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  .jobActions-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #c5c6c9;
    border-radius: 3px;
    padding: 6px 10px;
    &.regular:hover svg {
      fill: ${styles.colorFiverr};
    }
  }
`;
