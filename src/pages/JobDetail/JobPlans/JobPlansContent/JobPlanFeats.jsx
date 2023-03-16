import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Collapsible from "../../../../components/Home/Collapsible/Collapsible";
import { breakpoints } from "../../../../constants/common";
import { styles } from "../../../../constants/styles";

export default function JobPlanFeats({ features }) {
  const renderFeatures = () => {
    return features.map((feature, idx) => (
      <li className="job-plan-feature" key={idx}>
        <i className={`fas fa-check ${feature.checked ? "checked" : ""}`}></i>
        {feature.name}
      </li>
    ));
  };
  const isScreenLarge = useMediaQuery({
    query: `(min-width: ${breakpoints.large}px)`,
  });
  return (
    <Styled>
      {isScreenLarge ? (
        <div className="job-plan-feat-collapse">
          <Collapsible
            title={<b>What's included</b>}
            content={renderFeatures()}
          />
        </div>
      ) : (
        renderFeatures()
      )}
    </Styled>
  );
}
const Styled = styled.ul`
  margin: 1rem 0;
  .checked {
    color: ${styles.colorFiverr};
  }
  .job-plan-feature {
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${styles.colorPale};
  }
  .content {
    background-color: transparent;
  }
  .job-plan-feat-collapse {
    margin: 0 -1rem;
  }
`;
