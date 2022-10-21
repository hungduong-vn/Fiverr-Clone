import React from "react";
import styled from "styled-components";
import { styles } from "../../../constants/styles";

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  width: 100%;
  margin: 0;
  @media screen and (min-width: 600px) {
    justify-content: flex-start;
    padding-bottom: 0;
    padding-right: 32px;
    width: auto;
  }
  li {
    fill: ${styles.colorSecondary};
    margin-right: 1.5rem;
    font-size: 20px;
    font-weight: 700;
    /* padding: 0.5rem; */

    a {
      outline: none;
      color: currentColor;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      &:hover {
        background-color: #efeff0;
        color: currentColor;
        border-radius: 50%;
        margin: -8px;
        padding: 8px;
        transition: background-color 0.2s;
      }
      i {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
  & li:last-child {
    margin-right: 0;
  }
`;

export default function FooterSocials() {
  return (
    <Wrapper>
      <li>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-pinterest"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </Wrapper>
  );
}
