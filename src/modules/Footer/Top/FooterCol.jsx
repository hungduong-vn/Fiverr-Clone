import React from "react";
import styled from "styled-components";
import Collapsible from "../../../components/Home/Collapsible/Collapsible";
import FooterColTitle from "./FooterColTitle";
import FooterList from "./FooterList";

const Col = styled.div`
  .footer-collapsible {
    padding-bottom: 20px;
    display: block;
    .col-title {
      padding: 0;
    }
  }
  .footer-lg {
    display: none;
  }
  @media screen and (min-width: 600px) {
    .footer-collapsible {
      display: none;
    }
    .footer-lg {
      display: block;
    }
  }
  .collapsible,
  .content {
    background-color: transparent;
    padding: 0;
    .col-title {
      padding-top: 0;
    }
    ul {
      padding-bottom: 1.25rem;
      margin: 0;
    }
  }
`;

export default function FooterCol({ col }) {
  const { list, title } = col;
  return (
    <Col className="col-15-xs col-5-sm col-3-md">
      <div className="footer-lg">
        <FooterColTitle title={title} />
        <FooterList list={list} />
      </div>
      <div className="footer-collapsible">
        <Collapsible
          title={<FooterColTitle title={title} />}
          content={<FooterList list={list} />}
        />
      </div>
    </Col>
  );
}
