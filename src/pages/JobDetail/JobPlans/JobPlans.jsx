import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../../constants/common";
import ContactSellerBtn from "./ContactSellerBtn/ContactSellerBtn";
import JobPlansContent from "./JobPlansContent/JobPlansContent";
import JobPlansTabs from "./JobPlansTabs/JobPlansTabs";

export default function JobPlans() {
  const [activePlan, setActivePlan] = useState(0);
  return (
    <Styled>
      <JobPlansTabs activePlan={activePlan} setActivePlan={setActivePlan} />
      <JobPlansContent activePlan={activePlan} />
      <ContactSellerBtn/>
    </Styled>
  );
}
const Styled = styled.div`
  margin: 3rem -1.5rem 1rem;
  @media screen and (min-width: ${breakpoints.medium}px) {
    margin: 3rem 0 1rem;
  }
  @media screen and (min-width: ${breakpoints.large}px) {
    position: sticky;
    /* height of jobNav = 53px + offset ~ 80px */
    top: 80px; 
  }
`;
