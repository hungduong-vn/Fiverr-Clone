import React from "react";
import styled from "styled-components";
import { styles } from "../../../constants/styles";
const Styled = styled.div`
  margin: 0 6px 16px;
  padding: 3px 12px;
  background: #efeff0;
  border-color: #efeff0;
  font-size: 14px;
  line-height: 160%;
  color: ${styles.colorSecondary};
  font-weight: 600;
  border-radius: 500px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export default function JobCatRelatedItem({ name }) {
  return <Styled>{name}</Styled>;
}
