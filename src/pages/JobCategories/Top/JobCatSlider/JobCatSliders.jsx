import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import SliderArrow from "../../../../components/Home/Slider/SliderArrow";
import SliderAdjWidth from "../../../../components/Home/SliderAdjWidth/SliderAdjWidth";
import { breakpoints } from "../../../../constants/common";
import JobCatSliderItem from "./JobCatSliderItem";

const Styled = styled.div`
  max-width: 100%;
  margin-top: 3rem;
  .jobcat-sliders-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .slick-track {
    display: flex;
  }
  .jobcat-sliders-arrows {
    display: flex;
    .prev {
      margin-right: 0.5rem;
    }
  }
  .jobcat-slider-item:first-of-type {
    padding-left: 0;
  }
  @media screen and (max-width: 1159px) {
    .jobcat-sliders {
      overflow-x: scroll;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
    .jobcat-sliders-head {
      margin-bottom: 1rem;
    }
  }
`;

export default function JobCatSliders({ slides, name }) {
  const isOverflow =
    useMediaQuery({
      query: `(max-width: ${breakpoints.extraLarge}px)`,
    }) || slides.length > 12;
  const [clickNext, setClickNext] = useState(() => {
    // console.log("ClickNext");
  });
  const [clickPrev, setClickPrev] = useState(() => {
    // console.log("ClickPrev");
  });
  return (
    <Styled>
      <div className="jobcat-sliders-head">
        <h2 className="text-display-4">Most popular in {name}</h2>
        {isOverflow ? null : (
          <div className="jobcat-sliders-arrows">
            <SliderArrow
              left={true}
              func={() => {
                clickPrev();
              }}
            />
            <SliderArrow
              func={() => {
                clickNext();
              }}
            />
          </div>
        )}
      </div>
      {isOverflow ? (
        <div className="jobcat-sliders">
          {slides.map((ele, idx) => (
            <JobCatSliderItem key={idx} item={ele} fixedWidth={isOverflow} />
          ))}
        </div>
      ) : (
        <SliderAdjWidth
          slides={slides}
          SlideComponent={JobCatSliderItem}
          setClickNext={setClickNext}
          setClickPrev={setClickPrev}
        />
      )}
    </Styled>
  );
}
