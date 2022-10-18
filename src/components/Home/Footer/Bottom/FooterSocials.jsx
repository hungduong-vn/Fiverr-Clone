import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
`;

export default function FooterSocials() {
  return (
    <Wrapper>
      <li>
        <i className="fab fa-twitter"></i>
      </li>
      <li>
        <i className="fab fa-facebook"></i>
      </li>
      <li>
        <i className="fab fa-linkedin"></i>
      </li>
      <li>
        <i className="fab fa-pinterest"></i>
      </li>
      <li>
        <i className="fab fa-instagram"></i>
      </li>
    </Wrapper>
  );
}
