import React from "react";

import styled from "styled-components";

const StyledSlide = styled.div`
  padding: 0 6px;
  .slide-inner {
    height: 345px;
    background-color: #efeff0;
    a {
      position: relative;
      display: block;
      h4 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        color: #fff;
        padding: 16px;
        small {
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          display: block;
        }
      }
      img {
        object-fit: cover;
        height: 345px;
        width: 100%;
        border-radius: 4px;
        transition: opacity 0.3s ease-in-out;
        position: absolute;
        top: 0;
        &:hover{
          opacity: .85;
        }
      }
    }
  }
  @media only screen and (min-width: 600px) {
    padding: 0 9px;
  }
  @media only screen and (min-width: 900px) {
    padding: 0 18px;
  }
`;

export default function PopularServiceItem({ ele }) {
  return (
    <StyledSlide>
      <div className="slide-inner">
        <a href="#">
          <h4>
            <small>{ele.heading.sub}</small>
            {ele.heading.main}
          </h4>
          {ele.pictureEle}
        </a>
      </div>
    </StyledSlide>
  );
}
