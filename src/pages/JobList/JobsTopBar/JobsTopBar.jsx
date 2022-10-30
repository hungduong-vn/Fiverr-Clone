import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import JobsFilter from "./JobsFilter/JobsFilter";
import JobsTogglers from "./JobsTogglers/JobsTogglers";

const Styled = styled.div`
  &.sticky {
    position: sticky;
    top: 0;
    box-shadow: 0 0.266px 1.13052px rgb(0 0 0 / 7%),
      0 0.89345px 3.79717px rgb(0 0 0 / 10%), 0 5px 17px rgb(0 0 0 / 17%);
    background-color: #fff;
    .jobs-top-bar {
      /* padding-top: 1rem; */
    }
  }
  .jobs-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
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

  return (
    <Styled ref={topRef}>
      <div className="max-width-container jobs-top-bar">
        <JobsFilter />
        <JobsTogglers />
      </div>
    </Styled>
  );
}
