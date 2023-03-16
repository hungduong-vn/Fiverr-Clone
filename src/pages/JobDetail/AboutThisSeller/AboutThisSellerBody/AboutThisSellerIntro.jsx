import React from "react";
import styled from "styled-components";

export default function AboutThisSellerIntro({ selfIntro }) {
  return <Styled>{selfIntro}</Styled>;
}
const Styled = styled.p`
  font-size: 1rem;
`;
