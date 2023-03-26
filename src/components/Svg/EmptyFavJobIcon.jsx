import React from "react";
import styled from "styled-components";

export default function EmptyFavJobIcon() {
  return (
    <Styled className="d-flex">
      <img className="fiverr-logo"
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/lettering.de2a2a2.svg"
        alt="Lettering"
      ></img>
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/view_all.62853c2.svg"
        alt=""
      />
    </Styled>
  );
}

const Styled = styled.div`
  max-height: 104px;
  overflow: hidden;
  .fiverr-logo {
    width: 150px;
    height: 150px;
    transform: translateY(-25px);
  }
`