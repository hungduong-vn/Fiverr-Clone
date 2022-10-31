import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  color: #74767e;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  padding: 0 10px;
`;

export default function JobsResult({count}) {
  return <Styled>{count} services available</Styled>;
}
