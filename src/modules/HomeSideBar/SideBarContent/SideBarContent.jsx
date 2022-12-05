import React from "react";
import GlobeIcon from "../../../components/Svg/GlobeIcon";
import SignInBtn from "../../../components/Home/SIgnInBtn/SignInBtn";
import SignUpBtn from "../../../components/Home/SignUpBtn/SignUpBtn";
import SideBarCatgories from "./SideBarCatgories";
import { useAsync } from "../../../hooks/useAsync";
import { getJobCats } from "../../../services/jobCategory";

export default function SideBarContent() {
  const { state: data } = useAsync({ service: getJobCats });
  return (
    <>
      <div className="sidebar-header">
        <SignUpBtn innerText="Join Fiverr" />
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-item">
          <SignInBtn innerText="Sign in" />
        </div>
        <SideBarCatgories title={"Browse Categories"} data={data || []} />
        <div className="sidebar-item">Explore</div>
        <div className="sidebar-item">Fiverr Business</div>
      </div>
      <div className="sidebar-footer">
        <div className="footer-title">General</div>
        <div className="footer-item">Home</div>
        <div className="footer-item">
          English <GlobeIcon />
        </div>
        <div className="footer-item">$ USD</div>
      </div>
    </>
  );
}
