import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FiverLogo from "../../../components/Svg/FiverLogo";

export default function NotFoundHeader() {
  return (
    <Styled className="not-found-header">
      <Link to="/">
        <FiverLogo fill="#fff" />
      </Link>
    </Styled>
  );
}

const Styled = styled.div``;
