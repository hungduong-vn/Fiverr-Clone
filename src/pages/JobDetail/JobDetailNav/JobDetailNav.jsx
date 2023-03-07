import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import JobNavTabs from "./JobNavTabs";
import JobsDetailActions from "./JobsDetailActions";

export default function JobDetailNav({ sections }) {
  const jobNavRef = useRef();
  const handleScrollStickyNav = (navOffsetTop) => {
    if (window.scrollY >= navOffsetTop) {
      jobNavRef.current.classList.add("sticky");
    } else {
      jobNavRef.current.classList.remove("sticky");
    }
  };
  useEffect(() => {
    const { offsetTop } = jobNavRef.current;
    window.addEventListener("scroll", () => {
      handleScrollStickyNav(offsetTop);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScrollStickyNav(offsetTop);
      });
    };
  }, []);
  return (
    <Styled ref={jobNavRef}>
      <div className="max-width-container">
        <div className="jobNav-content">
          <JobNavTabs sections={sections} />
          <JobsDetailActions />
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #e4e5e7;
  .jobNav-content {
    display: flex;
    justify-content: space-between;
  }
  &.sticky {
    z-index: 1;
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
  }
`;
