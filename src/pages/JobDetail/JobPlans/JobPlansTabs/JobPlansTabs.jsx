import React from "react";
import styled from "styled-components";
import { plans } from "../data";
import JobPlansTab from "./JobPlansTab";

export default function JobPlansTabs({ activePlan, setActivePlan }) {
  return (
    <Styled>
      {plans.map((tab, idx) => (
        <JobPlansTab
          key={idx}
          id={idx}
          active={idx === activePlan}
          setActivePlan={setActivePlan}
          name={tab.name}
        />
      ))}
    </Styled>
  );
}
const Styled = styled.div`
  display: flex;
`;
