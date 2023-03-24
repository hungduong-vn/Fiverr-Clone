import { Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logout from "../Logout/Logout";

export default function HeaderListSignedIn({ name, avatar }) {
  const dropdownItems = [
    {
      label: <Link to={`/profile/${name}`}>Profile</Link>,
      key: 0,
    },
    { type: "divider" },
    { label: <Logout />, key: 2 },
  ];

  return (
    <Styled className="header__item">
      <Dropdown
        menu={{ items: dropdownItems }}
        trigger={["click"]}
        placement={"bottomRight"}
      >
        <img
          src={avatar || `https://ui-avatars.com/api/?name=${name}`}
          alt=""
          className="profile-avatar"
        />
      </Dropdown>
    </Styled>
  );
}

const Styled = styled.li`
  .profile-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;
