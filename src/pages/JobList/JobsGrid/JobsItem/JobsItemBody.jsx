import React from "react";
import styled from "styled-components";
import FullStarIcon from "../../../../components/Svg/Stars/FullStarIcon";
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
        <FullStarIcon />
        {star}
        <span className="jobs-reviews">({reviews})</span>
      </div>
    </Styled>
  );
}
