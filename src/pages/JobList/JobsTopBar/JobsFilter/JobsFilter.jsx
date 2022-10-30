import React from "react";
import styled from "styled-components";
// import Collapsible from "../../../../components/Home/Collapsible/Collapsible";
import DropDownAnt from "../../../../components/Home/DropDownAntd/DropDownAntd";
import { styles } from "../../../../constants/styles";

const Styled = styled.div`
  display: flex;
  .ant-dropdown-trigger {
    &:first-of-type {
      margin-left: 0;
    }
    margin: 0 6px;
    margin-top: 1rem;
    padding: 6px 12px;
    border: 1px solid ${styles.colorLight};
    border-radius: 4px;
    font-weight: 600;
    color: #222325;
    min-width: 50px;
  }
`;
const filterTitles = [
  "Category",
  "Service Options",
  "Seller Details",
  "Budget",
  "Delivery Time",
];
export default function JobsFilter() {
  return (
    <Styled>
      {filterTitles.map((ele, idx) => (
        <DropDownAnt key={idx} title={ele} gap={12} content={"Hi"} />
      ))}
    </Styled>
  );
}
