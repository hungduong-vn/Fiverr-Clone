import React from "react";
import styled from "styled-components";
import Stars from "../../../../components/Home/Stars/Stars";
import moment from "moment";
import { styles } from "../../../../constants/styles";
import ReviewHelpful from "./ReviewHelpful";

export default function JobReview({ review }) {
  const { reviewer, created_at, stars, content } = review;
  const { avatar, name, nationality } = reviewer;
  const date = Date.parse(created_at);
  const since = moment(date).fromNow();
  return (
    <Styled>
      <div className="reviewer">
        <div className="reviewer-avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="reviewer-meta">
          <div className="reviewer-name">
            <b>{name}</b>
          </div>
          <div className="reviewer-nationality">{nationality}</div>
        </div>
      </div>
      <div className="review-detail">
        <div className="review-meta">
          <Stars totalStars={stars} />
          <span className="separator">|</span>
          <div className="review-created-at">{since}</div>
        </div>
        <div className="review-content">{content}</div>
        <ReviewHelpful/>
      </div>
    </Styled>
  );
}
const Styled = styled.div`
  padding: 1rem 0;
  .reviewer {
    display: flex;
    gap: 1rem;
  }
  .reviewer-avatar {
    width: 48px;
    height: 48px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .review-detail {
    margin: 1rem 0 0 4rem;
  }
  .review-meta {
    display: flex;
    margin-bottom: 1rem;
    .separator {
      margin: 0 0.5rem;
    }
  }
  .separator,
  .reviewer-nationality,
  .review-created-at {
    color: ${styles.colorPale};
  }
`;
