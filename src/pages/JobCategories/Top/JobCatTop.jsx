import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.div``;

export default function JobCatTop() {
  const params = useParams();
  console.log({ params });
  return <Styled>JobCatTop</Styled>;
}
