import { Card, Divider } from "antd";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import moment from "moment";
import { styles } from "../../../constants/styles";
import EditDisplayName from "../EditProfile/EditDisplayName";
import { breakpoints } from "../../../constants/common";

export default function UserInfoTop({
  user: { name, avatar, created_at, nationality, display_name: displayName },
  isEdit,
}) {
  return (
    <Styled>
      <Card>
        <div className="user-info-thumb">
          <div >
            <div className="user-info-avatar">
              <img
                src={avatar || `https://ui-avatars.com/api/?name=${name}`}
                alt="avatar"
              />
            </div>
            {isEdit ? (
              <EditDisplayName displayName={displayName} />
            ) : (
              <div className="user-info-display-name pt-3 text-center">
                {displayName}
              </div>
            )}
            <div className="user-info-username pt-1 text-center">@{name}</div>
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
    width: 160px;
    margin: 0 auto;
  }
  .user-info-thumb {
    display: flex;
    justify-content: center;
  }
  .user-info-username {
    font-size: 1rem;
    color: ${styles.colorPale};
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
  .user-info-display-name {
    font-size: 1rem;
    font-weight: 700;
  }
  @media screen and (min-width: ${breakpoints.large}px) {
    .user-info-display-name {
      font-size: 1.5rem;
    }
  }
`;
