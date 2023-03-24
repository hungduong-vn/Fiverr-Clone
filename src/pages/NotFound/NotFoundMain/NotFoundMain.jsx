import React from "react";
import styled from "styled-components";
import NotFoundDivider from "./NotFoundDivider";
import NotFoundExplore from "./NotFoundExplore/NotFoundExplore";

export default function NotFoundMain() {
  return (
    <Styled>
      <h3 className="not-found-title">
        Well, this isn't what you were looking for
      </h3>
      <NotFoundDivider />
      <div className="not-found-subtitle">
        <h5>But at least it's pretty</h5>
        <p>Keep exploring!</p>
      </div>
      <NotFoundExplore />
    </Styled>
  );
}
const Styled = styled.div`
  .not-found-title {
    color: #fff;
    font-size: 1.75rem;
    line-height: 2.25rem;
    margin-bottom: 0;
    margin-top: 2rem;
  }
  .not-found-divider {
    margin: 1.75rem 0;
  }
  .not-found-subtitle {
    h5 {
      color: #fff;
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin: 0;
    }
  }
  @media screen and (min-width: 600px) {
    width: 636px;
    .not-found-title {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    .not-found-divider {
      margin: 2.5rem 0;
    }
    .not-found-subtitle h5 {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
  }
  @media screen and (min-width: 900px) {
    margin: auto 0;
  }
`;
