import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAsync } from "../../../hooks/useAsync";
import { getUserByNameAuthApi } from "../../../services/user";
import UserInfo from "../UserInfo/UserInfo";
import UserJobs from "../UserJobs/UserJobs";

export default function EditProfile() {
  const { userInfo } = useSelector((state) => state.userReducer);
  const { userName } = useParams();
  const { state } = useAsync({ service: () => getUserByNameAuthApi(userName) });
  console.log({ state });
  return (
    <Styled className="max-width-container">
      <Row gutter={24}>
        <Col xs={24} sm={10} md={8} lg={6}>
          <UserInfo userInfo={userInfo} isEdit={true} />
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
