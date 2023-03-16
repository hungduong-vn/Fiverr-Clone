import React from "react";
import styled from "styled-components";
import { defSellerInfo } from "../../UserProfile/data";
import AboutSellerTop from "./AboutSellerTop/AboutSellerTop";
import AboutThisSellerBody from "./AboutThisSellerBody/AboutThisSellerBody";

export default function AboutThisSeller({ userId }) {
  const seller = defSellerInfo;
  const {
    name,
    id,
    birthday,
    created_at,
    nationality,
    languages,
    avatar,
    title,
    self_intro,
  } = seller;
  const sellerTop = { avatar, name, id, title };
  const sellerBody = {
    birthday,
    created_at,
    nationality,
    languages,
    self_intro,
  };
  return (
    <Styled>
      <h4>About The Seller</h4>
      <AboutSellerTop sellerTop={sellerTop} />
      <AboutThisSellerBody sellerBody={sellerBody} />
    </Styled>
  );
}
const Styled = styled.div`
  h4 {
    margin: 4rem 0 2rem;
  }
`;
