import React from "react";
import GlobeIcon from "../../../components/Svg/GlobeIcon";
import SignInBtn from "../../../components/Home/SIgnInBtn/SignInBtn";
import SignUpBtn from "../../../components/Home/SignUpBtn/SignUpBtn";
import SideBarCatgories from "./SideBarCatgories";
import { useAsync } from "../../../hooks/useAsync";
import { getJobCats } from "../../../services/jobCategory";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SideBarSignedIn from "./SideBarSignedIn";
import Logout from "../../Header/Logout/Logout";

export default function SideBarContent({ closeSideBar }) {
  const { state: data } = useAsync({ service: getJobCats });
  const { userInfo } = useSelector((state) => state.userReducer);
  const isSignedIn = !!userInfo;
  return (
    <Styled>
      <div className="sidebar-header">
        {isSignedIn ? (
          <SideBarSignedIn
            name={userInfo.name}
            avatar={userInfo.avatar}
            closeSideBar={closeSideBar}
          />
        ) : (
          <SignUpBtn closeSideBar={closeSideBar} innerText="Join Fiverr" />
        )}
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-item">
          {isSignedIn ? (
            <Logout callback={closeSideBar} />
          ) : (
            <SignInBtn closeSideBar={closeSideBar} innerText="Sign in" />
          )}
        </div>
        <SideBarCatgories
          title={"Browse Categories"}
          data={data || []}
          closeSideBar={closeSideBar}
        />
        <div className="sidebar-item">Explore</div>
        <div className="sidebar-item">Fiverr Business</div>
      </div>
      <div className="sidebar-footer">
        <div className="footer-title">General</div>
        <div className="footer-item">
          <Link onClick={closeSideBar} to={"/"}>
            Home
          </Link>
        </div>
        <div className="footer-item">
          English <GlobeIcon />
        </div>
        <div className="footer-item">$ USD</div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  a {
    color: #95979d;
    &:hover {
      text-decoration: underline;
    }
  }
`;
