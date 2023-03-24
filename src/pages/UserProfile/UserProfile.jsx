import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useAsync } from "../../hooks/useAsync";
import { getUserByName } from "../../services/user";
import UserInfo from "./UserInfo/UserInfo";
import SellingGigs from "./UserJobs/SellingGigs/SellingGigs";

export default function UserProfile() {
  const { userName } = useParams();
  const { state: userInfo } = useAsync({
    service: () => getUserByName(userName),
  });
  const navigate = useNavigate();
  useEffect(() => {
    console.log({ userInfo });
    if (userInfo === null) {
      navigate("/not-found");
    }
  }, [userInfo]);
  return (
    <Styled className="max-width-container">
      {userInfo && (
        <Row gutter={24}>
          <Col xs={24} sm={10} md={8} lg={6}>
            <UserInfo userInfo={userInfo} isEdit={false} />
          </Col>
          <Col xs={24} sm={14} md={16} lg={18}>
            <SellingGigs sectionTitle={`${userInfo.name}'s Gigs`} />
          </Col>
        </Row>
      )}
    </Styled>
  );
}

const Styled = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
