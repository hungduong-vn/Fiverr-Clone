import styled from "styled-components";
import { styles } from "../../../../constants/styles";

export const CategoriesNavItem = styled.li`
  padding-left: 1.875rem;
  display: inline-block;
  flex-shrink: 0;
  padding: 0 10px;
  font-size: 1rem;
  color: #62646a;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  span {
    position: relative;
    &::after {
      content: "";
      /* box-sizing: content-box; */
      height: 3px;
      background-color: transparent;
      position: absolute;
      bottom: -0.75rem;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.3s;
      width: 100%;
    }
  }

  &:hover {
    span::after {
      background-color: ${styles.colorFiverr};
    }
  }
  &:first-of-type {
    @media only screen and (min-width: 600px) {
      padding-left: 30px;
    }
    @media only screen and (min-width: 1160px) {
      padding-left: 0;
    }
  }
  &:last-of-type {
    @media only screen and (min-width: 600px) {
      padding-right: 30px;
    }
    @media only screen and (min-width: 1160px) {
      padding-right: 0;
    }
  }
`;
