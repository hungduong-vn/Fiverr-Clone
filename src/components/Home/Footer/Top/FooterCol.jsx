import React from "react";
import styled from "styled-components";
import FooterColTitle from "./FooterColTitle";
import FooterList from "./FooterList";

const Col = styled.div``;

export default function FooterCol({ col }) {
  const { list, title } = col;
  return (
    <Col className="col-15-xs col-5-sm col-3-md">
      <FooterColTitle title={title} />
      <FooterList list={list} />
    </Col>
  );
}
