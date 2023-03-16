import React from "react";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";

export default function JobPlanBrief({ brief }) {
  return (
    <Styled className="plan-brief">
      <span className="plan-brief-label">{brief.label}</span>
      {brief.content}
    </Styled>
  );
}

const Styled = styled.p`
  min-height: 63px;
  margin-top: 1.5rem;
  margin-bottom: 10px;
  color: ${styles.colorPrimary};
  .plan-brief-label {
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;
