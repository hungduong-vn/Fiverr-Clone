import React from "react";
import styled from "styled-components";
import CarouselPopularItem from "./CarouselSearchBar/CarouselPopularItem";

const Styled = styled.div`
  padding-top: 1.5rem;
  color: #fff;
  font-size: 14px;
  display: none;
  span {
    font-weight: 600;
  }
  .popular-list {
    margin-left: 0.75rem;
    display: flex;
  }
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

const popularItems = [
  "Website Design",
  "WordPress",
  "Logo Design",
  "Video Editing",
];

export default function CarouselSearchPopular() {
  return (
    <Styled>
      <span>Popular: </span>
      <ul className="popular-list">
        {popularItems.map((ele, idx) => (
          <CarouselPopularItem key={idx} content={ele} />
        ))}
      </ul>
    </Styled>
  );
}
