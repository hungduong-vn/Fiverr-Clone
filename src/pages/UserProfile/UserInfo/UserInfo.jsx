import React from "react";
import styled from "styled-components";
import UserInfoBottom from "./UserInfoBottom/UserInfoBottom";
import UserInfoTop from "./UserInfoTop";

export default function UserInfo({ userInfo, isEdit }) {
  return (
    <Styled>
      <UserInfoTop user={userInfo} isEdit={isEdit || false} />
      <div className="divider"></div>
      <UserInfoBottom isEdit={isEdit || false} />
    </Styled>
  );
}
const Styled = styled.div`
  .divider {
    height: 3rem;
  }
`;
