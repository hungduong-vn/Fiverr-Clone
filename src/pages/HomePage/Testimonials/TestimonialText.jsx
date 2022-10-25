import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  h5 {
    font-weight: 400;
    color: #74767e;
    padding-bottom: 16px;
  }
  img {
    display: block;
    height: 36px;
    margin-left: -6px;
  }
  .testimonial-content {
    font-size: 24px;
    line-height: 36px;
    color: #003912;
    padding-bottom: 24px;
    i {
      font-weight: 500;
      font-family: DomaineDisplay, Helvetica Neue, Helvetica, Arial, sans-serif;
    }
  }
  @media screen and (min-width: 1160px) {
    span {
      border-left: 1px solid #c5c6c9;
      height: 36px;
      margin-left: 16px;
      img {
        display: inline-block;
        vertical-align: middle;
        margin-left: 12px;
      }
    }

    .testimonial-content {
      font-size: 30px;
      line-height: 44px;
    }
  }
  @media screen and (min-width: 900px) {
    .testimonial-content {
      padding-bottom: 0;
    }
  }
`;

export default function TestimonialText({ text }) {
  return (
    <Styled>
      <div className="testimonial-heading">
        <h5>
          {text.founder}
          <span>
            <img src={text.logo} alt="" />
          </span>
        </h5>
      </div>
      <div className="testimonial-content">
        <i>{text.content}</i>
      </div>
    </Styled>
  );
}
