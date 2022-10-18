import React from "react";
import styled from "styled-components";
import FooterLogo from "./FooterLogo";
import FooterSettings from "./FooterSettings";
import FooterSocials from "./FooterSocials";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 0;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 16px 0 0;
  -webkit-box-orient: vertical;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    -webkit-box-orient: horizontal;
    flex-direction: row;
    width: auto;
  }
  .footer-logo {
    margin-bottom: 7px;
  }
  .footer-copyright {
    span {
      margin-top: 8px;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #b5b6ba;
      font-size: 14px;
      line-height: 21px;
      display: block;
      @media only screen and (min-width: 600px) {
        -webkit-box-direction: normal;
        margin-left: 24px;
        margin-top: 0;
      }
    }
  }
`;

export default function FooterBottom() {
  return (
    <Wrapper>
      <SubWrapper className="left">
        <span className="footer-logo">
          <FooterLogo />
        </span>
        <p className="footer-copyright">
          <span>© Fiverr International Ltd. 2022</span>
        </p>
      </SubWrapper>
      <SubWrapper className="right">
        <FooterSocials />
        <FooterSettings />
      </SubWrapper>
    </Wrapper>
  );
}
