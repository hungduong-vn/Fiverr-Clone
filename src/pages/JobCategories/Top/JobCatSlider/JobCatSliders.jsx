import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import { breakpoints } from "../../../../constants/common";
import JobCatSliderItem from "./JobCatSliderItem";

const Styled = styled.div`
  max-width: 100%;
  overflow-x: scroll;
  .jobcat-sliders {
    display: flex;
    ${({ overflow }) =>
      overflow &&
      css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
      `}

    .jobcat-slider-item:first-of-type {
      padding-left: 0;
    }
  }
`;

export default function JobCatSliders({ slides }) {
  const isOverflow =
    useMediaQuery({
      query: `(max-width: ${breakpoints.small}px)`,
    }) || slides.length > 12;
  console.log({ isOverflow });
  return (
    <Styled overflow={isOverflow}>
      <div className="jobcat-sliders">
        {slides.map((ele, idx) => (
          <JobCatSliderItem key={idx} item={ele} fixedWidth={isOverflow} />
        ))}
      </div>
    </Styled>
  );
}
