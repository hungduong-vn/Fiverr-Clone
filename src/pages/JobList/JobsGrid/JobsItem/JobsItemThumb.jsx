import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s;
    /* position: relative; */
  }
`;

export default function JobsItemThumb({ img, handleClick }) {
  return (
    <Styled onClick={handleClick} className="jobs-item-thumb">
      <img src={img} alt="" />
    </Styled>
  );
}
