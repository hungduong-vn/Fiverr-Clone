import { Card, Divider } from "antd";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../constants/common";
import moment from "moment";

export default function UserInfoTop({
  user: { name, avatar, created_at, nationality },
}) {
  return (
    <Styled>
      <Card>
        <div className="user-info-thumb">
          <div>
            <div className="user-info-avatar">
              <img
                src={avatar || `https://ui-avatars.com/api/?name=${name}`}
                alt="avatar"
              />
            </div>
            <div className="user-info-username py-3 text-center">{name}</div>
          </div>
        </div>
        <Divider />
        <div className="user-info-intro">
          <div className="user-info-intro-item">
            <div className="user-info-intro-icon">
              <EnvironmentOutlined /> From
            </div>
            <span>{nationality}</span>
          </div>
          <div className="user-info-intro-item">
            <div className="user-info-intro-icon">
              <UserOutlined /> Member Since
            </div>
            <span>{moment(created_at).format("L")}</span>
          </div>
        </div>
      </Card>
    </Styled>
  );
}
const Styled = styled.div`
  .user-info-avatar {
    img {
      border-radius: 50%;
      width: 100%;
    }
    max-width: 350px;
    min-width: 160px;
  }
  .user-info-thumb {
    display: flex;
    justify-content: center;
  }
  .user-info-username {
    font-size: 1rem;
    font-weight: 700;
  }
  .user-info-intro-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0;
    width: 100%;
  }
  .user-info-intro-icon {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    .anticon {
      margin-right: 0.25rem;
    }
  }
  @media screen and (min-width: ${breakpoints.large}px) {
    .user-info-username {
      font-size: 1.5rem;
    }
  }
`;
