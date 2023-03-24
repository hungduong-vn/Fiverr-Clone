import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SideBarSignedIn({ name, avatar, closeSideBar }) {
  return (
    <Styled>
      <img
        className="sidebar-avatar"
        src={avatar || `https://ui-avatars.com/api/?name=${name}`}
        alt=""
      />
      <Link
        to={`/user/${name}`}
        className="sidebar-username"
        onClick={closeSideBar}
      >
        {name}
      </Link>
    </Styled>
  );
}
const Styled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  .sidebar-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .sidebar-username {
    color: #000;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 1rem;
  }
`;
