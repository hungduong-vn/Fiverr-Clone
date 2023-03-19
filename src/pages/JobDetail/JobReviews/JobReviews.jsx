import { Divider } from "antd";
import React from "react";
import styled from "styled-components";
import { calcStar } from "../../../utils/common";
import { reviews } from "./data";
import JobReview from "./JobReview/JobReview";
import JobReviewsStats from "./JobReviewsStats/JobReviewsStats";

export default function JobReviews() {
  const totalReviews = reviews.length;
  let totalStar = calcStar(reviews.map((review) => review.stars));
  return (
    <Styled>
      <h4>Reviews</h4>
      <JobReviewsStats totalReviews={totalReviews} totalStar={totalStar} />
      {reviews.map((review) => (
        <React.Fragment key={review.id}>
          <Divider />
          <JobReview review={review} />
        </React.Fragment>
      ))}
    </Styled>
  );
}
const Styled = styled.div`
  h4 {
    margin: 2rem 0;
  }
`;
