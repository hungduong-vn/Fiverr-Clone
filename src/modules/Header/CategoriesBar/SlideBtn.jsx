import React, { useRef, useState } from "react";
import styled from "styled-components";
import SlideBtnLeft from "./SlideBtnLeft";
import SlideBtnRight from "./SlideBtnRight";

const Button = styled.button`
  background: linear-gradient(90deg, #fff 50%, hsla(0, 0%, 100%, 0));
  border: none;
  color: #62646a;
  font-size: 10px;
  padding: 8px 32px 12px;
  position: absolute;
  z-index: 1;
  &.right {
    background: linear-gradient(270deg, #fff 50%, hsla(0, 0%, 100%, 0));
    padding-left: 50px;
    right: 0;
  }
  &.left {
    left: 0;
    padding-right: 50px;
  }
`;

export default function SlideBtn({ isStart, navListRef }) {
  const [state, setState] = useState(isStart);
  const [viewWidth, setViewWdith] = useState(window.innerWidth);
  window.onresize = () => {
    setViewWdith(window.innerWidth);
  };
  const navItems = navListRef.current.children;
  const navItemWidths = Array.from(navItems).map((ele) => ele.offsetWidth);
  // console.log({ navItemWidths });
  const fullNavWidth = navItemWidths.reduce((prev, curr) => prev + curr, 0);
  // console.log({ fullNavWidth });
  const [isBoth, setIsBoth] = useState(!isStart);
  const distance = Math.abs(viewWidth - fullNavWidth);
  const handleRight = () => {
    if (isBoth) {
      console.log(`both right ${distance / 2}`);
      navListRef.current.style.transform = `translateX(-${distance}px)`;
      setIsBoth(false);
      setState(false);
      return;
    }
    if (distance >= viewWidth) {
      // console.log('right');
      navListRef.current.style.transform = `translateX(-${distance / 2}px)`;
      setIsBoth(true);
      setState(false);
    } else {
      // console.log('right');
      navListRef.current.style.transform = `translateX(-${distance}px)`;
      setState(false);
    }
  };
  const handleLeft = () => {
    if (isBoth) {
      // console.log("both left");
      navListRef.current.style.transform = `translateX(0)`;
      setIsBoth(false);
      setState(true);
      return;
    }
    if (distance >= viewWidth) {
      console.log("left");
      navListRef.current.style.transform = `translateX(-${distance / 2}px)`;
      setIsBoth(true);
      setState(false);
    } else {
      console.log("left");
      navListRef.current.style.transform = `translateX(0)`;
      setState(true);
    }
  };
  return (
    <>
      {" "}
      {state ? (
        <Button onClick={handleRight} className="right">
          <SlideBtnRight />
        </Button>
      ) : isBoth ? (
        <>
          <Button onClick={handleRight} className="right">
            <SlideBtnRight />
          </Button>
          <Button onClick={handleLeft} className="left">
            <SlideBtnLeft />
          </Button>
        </>
      ) : (
        <Button onClick={handleLeft} className="left">
          <SlideBtnLeft />
        </Button>
      )}{" "}
    </>
  );
}
