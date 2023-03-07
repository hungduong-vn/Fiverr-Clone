import React, { useEffect } from "react";
import styled from "styled-components";
import { styles } from "../../../constants/styles";

export default function JobNavTabs({ sections }) {
  const handleScroll = () => {
    const tabs = document.querySelectorAll(".jobNav-tab");
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 53) {
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
  justify-content: space-between;
  margin-bottom: 0;
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
