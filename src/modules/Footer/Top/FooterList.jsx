import React from "react";
import styled from "styled-components";
import FooterColItem from "./FooterColItem";

const Styled = styled.div`
  padding-bottom: 0;
  @media screen and (min-width: 600px) {
    padding-bottom: 2.5rem;
    display: block;
    overflow: hidden;
    text-align: left;
  }
`;
export default function FooterList({ list }) {
  // console.log({list});
  return (
    <Styled>
      <ul>
        {list &&
          list.map((ele, idx) => (
            <FooterColItem isFirst={idx === 0} key={idx} content={ele} />
          ))}
      </ul>
    </Styled>
  );
}
