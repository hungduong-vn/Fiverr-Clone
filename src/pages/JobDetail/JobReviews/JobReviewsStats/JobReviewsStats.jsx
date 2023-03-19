import React from "react";
import styled from "styled-components";
import Stars from "../../../../components/Home/Stars/Stars";
import { styles } from "../../../../constants/styles";

export default function JobReviewsStats({totalReviews, totalStar}) {
  // const data = reviews;
  return (
    <Styled>
      <div className="reviews-total">
        {totalReviews} reviews for this Gig
        <span className="separator">|</span>
        <Stars totalStars={totalStar} />
      </div>
    </Styled>
  );
}
const Styled = styled.div`
  .reviews-total {
    font-weight: bold;
    display: flex;
  }
  .separator {
    color: ${styles.colorPrimary};
    padding: 0 0.5rem;
  }
`;
