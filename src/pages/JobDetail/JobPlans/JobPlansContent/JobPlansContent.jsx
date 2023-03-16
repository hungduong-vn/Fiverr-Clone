import React from "react";
import styled from "styled-components";
import { plans } from "../data";

import JobPlanPrice from "./JobPlanPrice";
import JobPlanBrief from "./JobPlanBrief";
import JobPlanDelivery from "./JobPlanDelivery";
import JobPlanFeats from "./JobPlanFeats";
import JobPlansHireBtn from "../JobPlansHireBtn/JobPlansHireBtn";
import { breakpoints } from "../../../../constants/common";

export default function JobPlansContent({ activePlan }) {
  const plan = plans.filter((_, idx) => activePlan === idx)[0];
  const { price, brief, daysDelivery, revisions, features } = plan;
  return (
    <Styled>
      <JobPlanPrice price={price} />
      <JobPlanBrief brief={brief} />
      <JobPlanDelivery daysDelivery={daysDelivery} revisions={revisions} />
      <JobPlanFeats features={features} />
      <JobPlansHireBtn />
    </Styled>
  );
}

const Styled = styled.div`
  font-size: 14px;
  padding: 2rem 1.5rem;
  border: 1px solid rgb(218, 219, 221);
  border-top: none;
  border-bottom: none;
  @media screen and (min-width: ${breakpoints.medium}px) {
    border-bottom: 1px solid rgb(218, 219, 221);
  }
`;
