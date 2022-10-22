import React from "react";
import styled from "styled-components";
import IntroductionText from "./IntroductionText";
import IntroductionVideo from "./IntroductionVideo";

const Styled = styled.div`
  background-color: #f1fdf7;
`;

export default function Introduction() {
  return (
    <Styled className="main-section">
      <div className="max-width-container">
        <div className="grid-15">
          <IntroductionText  />
          <IntroductionVideo />
        </div>
      </div>
    </Styled>
  );
}
