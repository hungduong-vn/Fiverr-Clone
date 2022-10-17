import React from "react";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";

const Styled = styled.li`
  padding-bottom: 1rem;
  a {
    color: ${styles.colorSecondary};
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    color: ${styles.colorPale};
    font-size: 0.875rem;
  }
`;

export default function FooterColItem({ content }) {
  const preprocess = () => {
    if (typeof content === "string") {
      return <a href="/">{content}</a>;
    } else {
      return (
        <>
          <a href="/">{content.main}</a>
          <p>{content.sub}</p>
        </>
      );
    }
  };
  return <Styled>{preprocess(content)}</Styled>;
}
