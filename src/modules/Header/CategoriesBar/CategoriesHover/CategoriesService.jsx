import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.div`
  a {
    color: #62646a;
  }
  &:hover {
    a{
      text-decoration: underline;
    }
  }
`;
export default function CategoriesService({ name }) {
  const encodedName = encodeURIComponent(name);
  return (
    <Styled>
      <Link to={`/jobs?query=${encodedName}`}>{name}</Link>
    </Styled>
  );
}
