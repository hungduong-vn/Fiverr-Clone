import React from "react";
import styled from "styled-components";
import useInterval from "../../../../hooks/useInterval";
import CarouselBackSilde from "./CarouselBackSilde";
import { carouselBackground } from "./data";

const Wrapper = styled.div``;

export default function CarouselBack() {
  const duration = 6000;
  const count = useInterval(
    0,
    carouselBackground.length - 1,
    1,
    duration
  );
  // console.log(count);
  return (
    <Wrapper>
      {carouselBackground.map((ele, idx) => (
        <CarouselBackSilde isShow={idx === count} key={idx} content={ele} />
      ))}
    </Wrapper>
  );
}
