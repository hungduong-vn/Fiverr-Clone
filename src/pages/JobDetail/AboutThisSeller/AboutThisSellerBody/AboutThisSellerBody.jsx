import { Card, Divider } from "antd";
import React from "react";
import styled from "styled-components";
import AboutThisSellerInfo from "./AboutThisSellerInfo";
import AboutThisSellerIntro from "./AboutThisSellerIntro";

export default function AboutThisSellerBody({ sellerBody }) {
  const { birthday, created_at, nationality, languages, self_intro } =
    sellerBody;
  return (
    <Styled>
      <Card className="about-seller-card">
        <AboutThisSellerInfo
          birthday={birthday}
          created_at={created_at}
          nationality={nationality}
          languages={languages}
        />
        <Divider />
        <AboutThisSellerIntro selfIntro={self_intro} />
      </Card>
    </Styled>
  );
}

const Styled = styled.div``;
