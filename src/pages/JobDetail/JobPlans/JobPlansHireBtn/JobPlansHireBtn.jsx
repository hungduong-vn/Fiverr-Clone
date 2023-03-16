import React from "react";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";

export default function JobPlansHireBtn() {
  return <Styled>
    <span className="job-hire-text">Continue</span>
    <i className="fas fa-long-arrow-alt-right"></i>
  </Styled>;
}

const Styled = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  background-color: ${styles.colorFiverr};
  color: #fff;
  text-align: center;
  font-size: 1rem;
  position: relative;
  &:hover {
    background-color: rgb(25, 164, 99);
  }
  .job-hire-text {
    flex-grow: 1;
  }
  .fas {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
  }
`;
