import React from "react";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";

export default function UserInfoBottomBox({ title, updateFunc, content }) {
  return (
    <Styled title={title}>
      <div className="user-info-box-header">
        <h6>{title}</h6>
        <button className="user-info-box-btn">{updateFunc}</button>
      </div>
      <div className="user-info-box-content">
        {content || (
          <span className="user-info-box-placeholder">Add your {title}</span>
        )}
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  .user-info-box-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
  }
  .user-info-box-btn {
    color: ${styles.colorFiverr};
    transition: all 0.25s;
    &:focus {
      border: none;
      outline: none;
    }
    &:hover {
      font-weight: bold;
    }
  }
  .user-info-box-placeholder {
    color: grey;
  }
  ${({ title }) =>
    title === "Education" &&
    `
    .user-edu-meta {
      padding-top: 0.5rem;
      display: flex;
      justify-content: space-between;
      color: grey;
    }
  `}
  ${({ title }) =>
    title === "Linked Accounts" &&
    `
      .fab {
        width: 1rem;
      }
      .user-socials-name {
        padding-left: 0.5rem;
      }
    `}
`;
