import React from "react";
import styled from "styled-components";
import EmptySellingJobIcon from "../../../../components/Svg/EmptySellingJobIcon";
import { styles } from "../../../../constants/styles";

export default function UserJobsEmpty({ Icon, heading, buttonText }) {
  return (
    <Styled>
      <div className="user-job-empty-wrapper">
        <div className="user-job-empty-icon">
          {Icon ? <Icon /> : <EmptySellingJobIcon />}
        </div>
        <h3 className="user-job-empty-heading">{heading}</h3>
        <button className="user-job-empty-btn">{buttonText}</button>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  .user-job-empty-wrapper {
    border: 1px solid #ddd;
    background: #fff;
    text-align: center;
    padding: 128px 0 120px;
    border-radius: 2px;
    margin-bottom: 20px;
  }
  .user-job-empty-heading {
    padding: 1.5rem 1rem;
  }
  .user-job-empty-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-job-empty-btn {
    padding: 9px 24px;
    background-color: ${styles.colorFiverr};
    font-weight: bold;
    border-radius: 3px;
    color: #fff;
    &:hover {
      box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;
