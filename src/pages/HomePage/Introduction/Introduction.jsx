import React from "react";
import styled from "styled-components";
import IntroductionText from "./IntroductionText";
import IntroductionVideo from "./IntroductionVideo";

const Styled = styled.div`
  background-color: #f1fdf7;
  .max-width-container {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  @media only screen and (min-width: 900px) {
    .max-width-container {
      padding-top: 64px;
      padding-bottom: 64px;
    }
  }
  @media only screen and (min-width: 1160px) {
    .max-width-container {
      padding-top: 96px;
      padding-bottom: 96px;
    }
  }
`;

export default function Introduction() {
  return (
    <Styled className="main-section">
      <div className="max-width-container">
        <div className="grid-15">
          <IntroductionText />
          <IntroductionVideo />
        </div>
      </div>
    </Styled>
  );
}
