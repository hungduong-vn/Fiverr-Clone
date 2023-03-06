import React from "react";
import styled from "styled-components";
import UserInfoBottom from "./UserInfoBottom/UserInfoBottom";
import UserInfoTop from "./UserInfoTop";

export default function UserInfo({ userInfo }) {
  return (
    <Styled>
      <UserInfoTop user={userInfo} />
      <div className="divider"></div>
      <UserInfoBottom />
    </Styled>
  );
}
const Styled = styled.div`
  .divider {
    height: 3rem;
  }
`;
