import React from "react";
import GlobeIcon from "../../../components/Svg/GlobeIcon";
import SignInBtn from "../../../components/Home/SIgnInBtn/SignInBtn";
import SignUpBtn from "../../../components/Home/SignUpBtn/SignUpBtn";
import SideBarCatgories from "./SideBarCatgories";
import { useAsync } from "../../../hooks/useAsync";
import { getJobCats } from "../../../services/jobCategory";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SideBarContent({ closeSideBar }) {
  const { state: data } = useAsync({ service: getJobCats });
  return (
    <Styled>
      <div className="sidebar-header">
        <SignUpBtn closeSideBar={closeSideBar} innerText="Join Fiverr" />
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-item">
          <SignInBtn closeSideBar={closeSideBar} innerText="Sign in" />
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
