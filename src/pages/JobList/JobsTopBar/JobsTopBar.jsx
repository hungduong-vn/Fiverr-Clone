import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { breakpoints } from "../../../constants/common";
import JobsFilter from "./JobsFilter/JobsFilter";
import JobsTogglers from "./JobsTogglers/JobsTogglers";
import JobsTopSmall from "./JobsTopSmall/JobsTopSmall";

const Styled = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 32px;
  &.sticky {
    position: sticky;
    top: 0;
    box-shadow: 0 0.266px 1.13052px rgb(0 0 0 / 7%),
      0 0.89345px 3.79717px rgb(0 0 0 / 10%), 0 5px 17px rgb(0 0 0 / 17%);
    background-color: #fff;
  }
  .jobs-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  &::after {
    content: "";
    display: block;
    height: 15px;
  }
`;

export default function JobsTopBar() {
  const topRef = useRef(null);

  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    const sticky = topRef.current?.offsetTop;
    const onScroll = () => {
      console.log({ sticky }, window.pageYOffset);
      if (window.pageYOffset > sticky) {
        topRef.current.classList.add("sticky");
      } else {
        topRef.current.classList.remove("sticky");
      }
      setScrollY(window.scrollY);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // const { screenWidth } = useSelector((state) => state.layoutReducer);
  // console.log({screenWidth});
  const isScreenLarge = useMediaQuery({
    query: `(min-width: ${breakpoints.large}px)`,
  });
  return (
    <Styled ref={topRef}>
      <div className="jobs-top-bar">
        {isScreenLarge ? (
          <>
            <JobsFilter />
            <JobsTogglers />
          </>
        ) : <JobsTopSmall/>}
      </div>
    </Styled>
  );
}
