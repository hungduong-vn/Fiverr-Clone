import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../../constants/common";
import Stars from "../../../components/Home/Stars/Stars";

export default function JobOverviewTop({ avatar, name }) {
  const isScreenMedium = useMediaQuery({
    query: `(min-width : ${breakpoints.medium}px)`,
  });
  const starsDisplay = isScreenMedium ? 5 : 1;
  return (
    <Styled className="job-overview-top">
      <img
        className="seller-avatar"
        src={
          avatar ||
          "http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg"
        }
        alt="job-seller-avatar"
      />
      <div className="seller-info">
        <Link to={`/user/${name || "admin_fiverr"}`} className="seller-name ">
          {name || "admin_fiverr"}
        </Link>
        <div className="seller-badge ">Top Rated Seller</div>
      </div>
      <div className="job-rating">
        {"|"}
        <Stars totalStars={3.7} numStars={starsDisplay} />
        <span className="review-count">({500})</span>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  font-size: 12px;
  &,
  .job-rating,
  .seller-info {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .seller-avatar {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
  }
  .seller-name {
    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
  .seller-name,
  .star {
    font-weight: 600;
  }
  .seller-badge {
    color: #62646a;
  }
  @media screen and (min-width: ${breakpoints.medium}px) {
    font-size: 14px;
  }
`;
