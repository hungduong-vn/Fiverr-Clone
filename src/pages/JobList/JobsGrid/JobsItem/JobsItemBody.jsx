import React from "react";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";

const Styled = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid ${styles.colorLight};
  .jobs-creator {
    display: flex;
    align-items: center;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    .jobs-creator-text {
      margin-left: 8px;
      .jobs-creator-name {
        font-weight: 600;
      }
      .jobs-creator-level {
        font-size: 14px;
        color: ${styles.colorPale};
      }
    }
  }
  .jobs-name {
    padding: 13px 0 5px;
    transition: all 0.3s;
    div {
      height: 45px;
      word-wrap: break-word;
      word-break: break-word;
      overflow: hidden;
      -webkit-line-clamp: 2;
    }
  }
  .jobs-rating {
    color: #ffbe5b;
    padding-top: 10px;
    svg {
      margin-right: 5px;
    }
    .jobs-reviews {
      color: #b5b6ba;
      margin-left: 5px;
      font-size: 14px;
    }
  }
`;

export default function JobsItemBody({ seller, jobName, star, reviewCount }) {
  const reviews =
    reviewCount > 1000 ? parseInt(reviewCount / 1000) + "k+" : reviewCount;
  return (
    <Styled>
      <div className="jobs-creator">
        <img src={seller.avatar} alt="" />
        <div className="jobs-creator-text">
          <div className="jobs-creator-name">{seller.name}</div>
          <div className="jobs-creator-level">Level 1 seller</div>
        </div>
      </div>
      <div className="jobs-name">
        <div>{jobName}</div>
      </div>
      <div className="jobs-rating">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1792 1792"
          width="15"
          height="15"
        >
          <path
            fill="currentColor"
            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
          ></path>
        </svg>
        {star}
        <span className="jobs-reviews">({reviews})</span>
      </div>
    </Styled>
  );
}
