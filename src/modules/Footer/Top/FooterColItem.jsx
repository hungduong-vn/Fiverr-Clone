import React from "react";
import styled from "styled-components";
import { styles } from "../../../constants/styles";

const Styled = styled.li`
  padding-bottom: 1rem;
  ${({ isFirst }) => isFirst && `padding-top: 1.25rem;`}
  &:last-of-type{
    padding-bottom: 0;
  }
  a {
    color: ${styles.colorSecondary};
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    color: ${styles.colorPale};
    font-size: 0.875rem;
    margin: 0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function FooterColItem({ content, isFirst }) {
  const preprocess = () => {
    if (typeof content === "string") {
      return <a href="#">{content}</a>;
    } else {
      return (
        <>
          <a href="#">{content.main}</a>
          <p>{content.sub}</p>
        </>
      );
    }
  };
  return <Styled isFirst={isFirst}>{preprocess(content)}</Styled>;
}
