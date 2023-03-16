import React from "react";
import styled from "styled-components";
import JobNavScrollTab from "./JobNavScrollTab";

export default function JobNavScroll({ sections }) {
  return (
    <Styled>
      <div className="jobNav-container">
        <ul className="jobNav-content">
          {sections?.map((section) => (
            <JobNavScrollTab
              key={section.id}
              id={section.id}
              text={section.tabText}
            />
          ))}
        </ul>
      </div>
    </Styled>
  );
}

const Styled = styled.nav`
  .jobNav-container {
    padding: 0 1.5rem;
  }
  .jobNav-content {
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  @media only screen and (min-width: 600px) {
    .jobNav-container {
      /* padding: 0 2rem; */
      padding: 0;
    }
  }
  @media only screen and (min-width: 1160px) {
    .jobNav-container {
      margin: 0 auto;
      max-width: 1400px;
    }
  }
`;
