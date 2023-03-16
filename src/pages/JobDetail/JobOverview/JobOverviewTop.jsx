import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarIcon from "../../../components/Svg/StarIcon";
import { breakpoints } from "../../../constants/common";

export default function JobOverviewTop({ avatar, sellerId }) {
  const isScreenMedium = useMediaQuery({
    query: `(min-width : ${breakpoints.medium}px)`,
  });
  const stars = isScreenMedium ? 5 : 1;
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
        <Link to={`/user/${sellerId || 1}`} className="seller-name ">hungduong2k</Link>
        <div className="seller-badge ">Top Rated Seller</div>
      </div>
      <div className="job-rating">
        {"|"}
        <div className=" stars">
          {[...Array(stars)].map((_, idx) => (
            <StarIcon key={idx} />
          ))}
          <span className="star">5</span>
        </div>
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
  .stars {
    color: #ffbe5b;
    display: flex;
    align-items: center;
  }
  .star {
    margin-left: 5px;
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
