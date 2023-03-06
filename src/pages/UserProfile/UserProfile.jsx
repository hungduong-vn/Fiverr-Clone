import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import UserInfo from "./UserInfo/UserInfo";
import UserJobs from "./UserJobs/UserJobs";

export default function UserProfile() {
  const { userInfo } = useSelector((state) => state.userReducer);
  console.log(userInfo);
  return (
    <Styled className="max-width-container">
      <Row gutter={24}>
        <Col xs={24} sm={10} md={8} lg={6}>
          <UserInfo userInfo={userInfo} />
        </Col>
        
        <Col xs={24} sm={14} md={16} lg={18}>
          <UserJobs />
        </Col>
      </Row>
    </Styled>
  );
}

const Styled = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
