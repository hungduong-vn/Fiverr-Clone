import React from "react";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";
export default function JobPlansTab({ name, active, setActivePlan, id }) {
  const handleClick = () => {
    setActivePlan(id);
  };
  return (
    <Styled
      name={name}
      className={active ? "active" : ""}
      onClick={handleClick}
    >
      {name}
    </Styled>
  );
}

const Styled = styled.div`
  width: 33.33%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #74767e;
  background-color: #fafafa;
  cursor: pointer;
  border: 1px solid rgb(218, 219, 221);
  ${({ name }) =>
    name === "Standard" &&
    `
    border-left: none;
    border-right: none;
  `}
  &.active {
    padding-bottom: 14px;
    color: ${styles.colorFiverr};
    background-color: #fff;
    border-bottom: 3px solid ${styles.colorFiverr};
  }
`;
