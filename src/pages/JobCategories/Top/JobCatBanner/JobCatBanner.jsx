import React from "react";
import styled, { css } from "styled-components";
import PlayIcon from "../../../../components/Svg/PlayIcon";

const Styled = styled.div`
  padding-top: 2rem;
  overflow: hidden;
  .wrapper {
    max-width: 1440px;
    max-height: 294px;
    min-height: 234px;
    background-image: url(${({ bgMobile }) => bgMobile});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    ${({ bgColor }) =>
      bgColor
        ? css`
            background-color: ${bgColor};
          `
        : ""}
  }
  .content {
    z-index: 1;
    text-align: center;
    box-sizing: border-box;
    padding: 40px;
    color: #fff;
    .title {
      color: inherit;
    }
    .description {
      font-size: 1.25rem;
      margin-top: 0.75rem;
    }
    .jobcat-banner-button {
      margin-top: 1.5rem;
      font-size: 1rem;
      line-height: 24px;
      button {
        border: 1px solid #fff;
        border-radius: 3px;
        padding: 10px 1rem;
        fill: #fff;
        transition: all 0.3s;
        &:hover {
          background-color: #fff;
          color: #000;
          fill: #000;
        }
      }
      span {
        margin-right: 7px;
      }
    }
  }
  @media screen and (min-width: 600px) {
    .wrapper {
      background-image: url(${({ bgDesktop }) => bgDesktop});
      max-height: 240px;
      min-height: 240px;
    }
    .content {
      padding: 50px;
      .description {
        margin-top: 0.5rem;
      }
    }
  }
`;
export default function JobCatBanner({ name, description, banner }) {
  const { bg_color, mobile_img, desktop_img } = banner;
  return (
    <Styled
      className="jobcat-banner"
      bgColor={bg_color}
      bgMobile={mobile_img}
      bgDesktop={desktop_img}
    >
      <div className="wrapper">
        <div className="content">
          <h1 className="title">{name}</h1>
          <p className="description">{description}</p>
          <div className="jobcat-banner-button">
            <button>
              <span>
                <PlayIcon fill={"currentFill"} />
              </span>
              How Fiverr Works
            </button>
          </div>
        </div>
      </div>
    </Styled>
  );
}
