import { Switch } from "antd";
import React from "react";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";
const Styled = styled.div`
  display: flex;
  .job-toggler {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    &:last-of-type {
      margin-right: 0;
    }
    .job-switch {
      background-color: ${styles.colorLight};
      height: 18px;
      width: 31px;
      .ant-switch-handle {
        height: 14px;
        width: 14px;
      }
      &.ant-switch-small.ant-switch-checked .ant-switch-handle {
        left: calc(100% - 16px);
      }
      &.ant-switch-small.ant-switch-checked {
        background-color: ${styles.colorFiverr};
      }
    }
    span {
      margin-left: 10px;
      font-weight: 600;
      color: ${styles.colorPrimary}
    }
  }
`;
export default function JobsTogglers() {
  const data = ["Pro services", "Local sellers", "Online sellers"];
  return (
    <Styled>
      {data.map((ele, idx) => (
        <div key={idx} className="job-toggler">
          <Switch size="small" className="job-switch" />
          <span>{ele}</span>
        </div>
      ))}
    </Styled>
  );
}
