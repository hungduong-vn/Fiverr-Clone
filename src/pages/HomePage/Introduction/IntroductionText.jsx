import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  &.intro-text {
    padding-bottom: 48px;
    h2 {
      padding-bottom: 20px;
    }
    h6 {
      padding-bottom: 8px;
      display: flex;
      align-items: flex-start;
      font-size: 16px;
      line-height: 140%;
    }
    p {
      font-size: 18px;
      line-height: 26px;
    }
    li {
      padding-bottom: 20px;
    }
    .check-icon {
      margin-right: 10px;
      width: 24px;
      height: 24px;
      fill: rgb(122, 125, 133);
      svg {
        height: 24px;
        width: 24px;
      }
    }
    @media only screen and (min-width: 600px) {
      h6 {
        font-size: 18px;
      }
    }

    @media only screen and (min-width: 900px) {
      padding-right: 7%;
      padding-bottom: 0;
      li {
        padding-bottom: 24px;
      }
      h2 {
        padding-bottom: 24px;
      }
    }
    @media only screen and (min-width: 1160px) {
      padding-right: 11%;
    }
  }
`;

export default function IntroductionText() {
  return (
    <Styled className="col-15-xs col-7-md intro-text">
      <h2>A whole world of freelance talent at your fingertips</h2>
      <ul>
        <li>
          <h6>
            <span
              className="XQskgrQ check-icon"
              aria-hidden="true"
              style={{ width: 24, height: 24, fill: "rgb(122, 125, 133)" }}
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
              </svg>
            </span>
            The best for every budget
          </h6>
          <p className="tbody-4">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </li>
        <li>
          <h6>
            <span
              className="XQskgrQ check-icon"
              aria-hidden="true"
              style={{ width: 24, height: 24, fill: "rgb(122, 125, 133)" }}
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
              </svg>
            </span>
            Quality work done quickly
          </h6>
          <p className="tbody-4">
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
        </li>
        <li>
          <h6>
            <span
              className="XQskgrQ check-icon"
              aria-hidden="true"
              style={{ width: 24, height: 24, fill: "rgb(122, 125, 133)" }}
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
              </svg>
            </span>
            Protected payments, every time
          </h6>
          <p className="tbody-4">
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </p>
        </li>
        <li>
          <h6>
            <span
              className="XQskgrQ check-icon"
              aria-hidden="true"
              style={{ width: 24, height: 24, fill: "rgb(122, 125, 133)" }}
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
              </svg>
            </span>
            24/7 support
          </h6>
          <p className="tbody-4">
            Questions? Our round-the-clock support team is available to help
            anytime, anywhere.
          </p>
        </li>
      </ul>
    </Styled>
  );
}
