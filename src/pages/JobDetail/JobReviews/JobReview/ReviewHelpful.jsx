import React, { useState } from "react";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { styles } from "../../../../constants/styles";
import styled from "styled-components";

const YesComponent = {
  ele: <LikeOutlined />,
  color: styles.colorFiverr,
  text: "Yes",
};

const NoComponent = {
  ele: <DislikeOutlined />,
  color: styles.colorLove,
  text: "No",
};

const ACTIVE_ENUMS = { yes: "YES", no: "NO", none: "NONE" };

export default function ReviewHelpful() {
  const [active, setActive] = useState(ACTIVE_ENUMS.none);
  const handleClick = (type) => {
    if (active === ACTIVE_ENUMS.none) {
      setActive(type);
    } else if (active === type) {
      setActive(ACTIVE_ENUMS.none);
    } else {
      setActive(type);
    }
  };
  const renderBtn = (type) => {
    const Component = type === ACTIVE_ENUMS.yes ? YesComponent : NoComponent;
    const isActive = active === type;
    return (
      <StyledBtn
        color={Component.color}
        onClick={() => handleClick(type)}
        className={isActive ? "active" : ""}
      >
        {Component.ele}
        <span className={`review-helpful-text`}>{Component.text}</span>
      </StyledBtn>
    );
  };
  return (
    <Styled className="review-helpful">
      <span className="review-helpful-label">Helpful?</span>
      <div className="review-helpful-yes">{renderBtn(ACTIVE_ENUMS.yes)}</div>
      <div className="review-helpful-no">{renderBtn(ACTIVE_ENUMS.no)}</div>
    </Styled>
  );
}

const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  &.active {
    color: ${({ color }) => color};
    fill: ${({ color }) => color};
  }
  &:focus {
    outline-color: transparent;
  }
`;

const Styled = styled.div`
  font-size: 14px;
  margin-top: 0.5rem;
  display: flex;
  font-weight: bold;
  gap: 0.75rem;
  align-items: center;
`;
