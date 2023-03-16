import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { styles } from "../../../constants/styles";

export default function JobNavScrollTab({ id, text }) {
  return (
    <Styled>
      <Link activeClass="active" spy smooth to={id} duration={10} offset={-80}>
        {text}
      </Link>
    </Styled>
  );
}

const Styled = styled.li`
  margin: 0 0.5rem;
  position: relative;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  a {
    transition: all 0.25s;
    color: ${styles.colorSecondary};
    transition: all 0.25s;
    font-size: 14px;
    font-weight: 600;
    line-height: 53px;
    &:hover {
      color: #222325;
    }
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
`;
