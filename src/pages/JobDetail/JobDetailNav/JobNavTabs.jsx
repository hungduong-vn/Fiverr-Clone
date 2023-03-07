import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { styles } from "../../../constants/styles";

export default function JobNavTabs({ sections, jobNavRef }) {
  const componentRef = useRef({ isInit: true, offsetTop: null });
  useEffect(() => {
    if (componentRef.current.isInit) {
      componentRef.current.offsetTop = jobNavRef.current.offsetTop;
      componentRef.current.isInit = false;
    }
  });
  useEffect(() => {
    const setTabActive = () => {
      const tabs = document.querySelectorAll(".jobNav-tab");
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop + 53) {
          current = section.id;
        }
      });
      tabs.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };
    const setNavSticky = () => {
      const navOffsetTop = componentRef.current.offsetTop;
      console.log({
        navOffsetTop,
        scrollY: window.scrollY,
      });
      // categoryHeader - position: relative => Add its height = 41px
      if (window.scrollY >= navOffsetTop + 41) {
        jobNavRef.current.classList.add("sticky");
      } else {
        jobNavRef.current.classList.remove("sticky");
      }
    };
    const handleScroll = () => {
      setNavSticky();
      setTabActive();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const render = () =>
    sections.map((section, idx) => (
      <li key={idx}>
        <a className={`jobNav-tab ${section.id}`} href={`#${section.id}`}>
          {section.tabText}
        </a>
      </li>
    ));
  return <Styled>{render()}</Styled>;
}

const Styled = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 0;
  white-space: nowrap;
  li {
    margin: 0 0.5rem;
    position: relative;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .jobNav-tab {
    transition: all 0.25s;
    &::before {
      transition: all 0.25s;
      width: 0;
      content: "";
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${styles.colorFiverr};
      position: absolute;
    }
    &.active {
      font-weight: bolder;
      color: #222325;
      &::before {
        height: 3px;
        width: 100%;
      }
    }
  }
  a {
    color: ${styles.colorSecondary};
    transition: all 0.25s;
    font-size: 14px;
    font-weight: 600;
    line-height: 53px;
    &:hover {
      color: #222325;
    }
  }
`;
