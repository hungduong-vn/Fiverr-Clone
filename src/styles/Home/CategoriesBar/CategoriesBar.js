import styled from "styled-components";
import { styles } from "../../../constants/styles";

export const StyledCategoriesBar = styled.div`
  background-color: #fff;
  color: ${styles.colorSecondary};
  width: 100%;
  display: none;
  /* visibility: ${(props) => (props.isShown ? "visible" : "hidden")}; */
  &.show {
    opacity: 1;
    transform: rotateX(0deg);
    transition: transform 0.2s, -webkit-transform 0.2s;
    border-bottom: 1px solid #e4e5e7;
  }

  @media only screen and (min-width: 600px) {
    display: block;
    transform: rotateX(90deg);
    opacity: 0;
    border-bottom: 1px solid #e4e5e7;
  }
`;
