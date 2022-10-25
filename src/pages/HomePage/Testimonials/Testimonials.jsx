import React from "react";
import styled from "styled-components";
import CustomSlider from "../../../components/Home/Slider/CustomSlider";
import { testimonials } from "./data";
import TestimonialText from "./TestimonialText";
import TestimonialVideo from "./TestimonialVideo";

const Styled = styled.div`
  .slide-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .testimonial-picture {
    width: 100%;
    min-height: 250px;
    border-radius: 4px;
    overflow: hidden;
  }
  .testimonial-text {
    padding: 24px 24px 0;
    width: 100%;
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 900px) {
    .slide-content {
      flex-direction: row;
    }
    .testimonial-picture {
      width: 50%;
    }
    .testimonial-text {
      padding: 0 36px 0 16px;
      width: 50%;
      box-sizing: content-box;
    }
  }
  @media screen and (min-width: 1160px) {
    .testimonial-picture {
      width: 40%;
    }
    .testimonial-text {
      padding: 0 48px 0 64px;
      max-width: 707px;
      width: 60%;
    }
  }
`;

export default function Testimonials() {
  return (
    <Styled className="max-width-container main-section">
      <CustomSlider>
        {testimonials.map((ele, idx) => (
          <div className="slide-wrapper" key={idx}>
            <div className="slide-content">
              <div className="testimonial-picture">
                <TestimonialVideo picture={ele.picture} video={ele.video} />
              </div>
              <div className="testimonial-text">
                <TestimonialText text={ele.text} />
              </div>
            </div>
          </div>
        ))}
      </CustomSlider>
    </Styled>
  );
}
