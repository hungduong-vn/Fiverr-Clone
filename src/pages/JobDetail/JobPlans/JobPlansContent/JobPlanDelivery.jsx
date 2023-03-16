import React from "react";
import { SyncOutlined, ClockCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";

export default function JobPlanDelivery({ daysDelivery, revisions }) {
  return (
    <Styled className="plan-delivery">
      <span className="plan-delivery-day">
        <ClockCircleOutlined />
        {daysDelivery} Day(s) Delivery
      </span>
      <span className="plan-delivery-revisions">
        <SyncOutlined />
        {revisions < 0 ? "Unlimited" : revisions} revision(s)
      </span>
    </Styled>
  );
}

const Styled = styled.div`
  font-weight: bold;
  color: ${styles.colorPrimary};
  &, span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .plan-delivery-revisions {
    margin-left: 0.5rem;
  }
`;
