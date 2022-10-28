import React from "react";
import styled from "styled-components";
import { styles } from "../../../constants/styles";


const Styled = styled.div`
  .col-title {
    padding-top: 0;
  }
  h6 {
    color: ${styles.colorDark};
    font-size: 1rem;
    line-height: 140%;
    font-weight: 700;
  }
`;

export default function FooterColTitle({ title }) {
  return (
    <Styled className="col-title">
      <h6>{title}</h6>
    </Styled>
  );
}
