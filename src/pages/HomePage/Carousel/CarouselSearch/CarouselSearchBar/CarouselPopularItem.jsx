import React from "react";
import styled from "styled-components";

const Styled = styled.li`
  margin-right: 0.75rem;
  white-space: nowrap;
  display: flex;
  a {
    color: #fff;
    border: 1px solid #fff;
    border-radius: 50px;
    font-weight: 600;
    padding: 2px 0.75rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

export default function CarouselPopularItem({ content }) {
  return (
    <Styled>
      <a href="#">{content}</a>
    </Styled>
  );
}
