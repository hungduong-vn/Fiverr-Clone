import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export default function JobsItemThumb({ img }) {
  return (
    <Styled>
      <img src={img} alt="" />
    </Styled>
  );
}
