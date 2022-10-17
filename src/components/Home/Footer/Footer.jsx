import React from "react";
import styled from "styled-components";
import FooterBottom from "./Bottom/FooterBottom";
import FooterTop from "./Top/FooterTop";

const StyledFooter = styled.footer`
  background-color: #fff;
  border-top: 1px solid #e4e5e7;
  position: relative;
  display: block;
  @media only screen and (min-width: 600px) {
    & .max-width-container {
      padding-bottom: 24px;
      padding-top: 64px;
    }
  }
`;
const Wrapper = styled.div``;
export default function Footer() {
  return (
    <div id="footer">
      <StyledFooter>
        <Wrapper className="max-width-container">
          <FooterTop />
          <FooterBottom />
        </Wrapper>
      </StyledFooter>
    </div>
  );
}
