import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CarouselBackSilde from "./CarouselBackSilde";
import { carouselBackground } from "./data";

const Wrapper = styled.div``;

export default function CarouselBack() {
  const [count, setCount] = useState(0);
  const slideDuration = 7000;
  let timer;
  const updateCount = () => {
    timer =
      !timer &&
      setInterval(() => {
        if (count < carouselBackground.length - 1) {
          setCount(count + 1);
        } else {
          setCount(0);
        }
      }, slideDuration);
  };
  useEffect(() => {
    updateCount();
    return () => clearInterval(timer);
  });
  console.log(count);
  return (
    <Wrapper>
      {carouselBackground.map((ele, idx) => (
        <CarouselBackSilde isShow={idx === count} key={idx} content={ele} />
      ))}
    </Wrapper>
  );
}
