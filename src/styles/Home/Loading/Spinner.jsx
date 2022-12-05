import styled from "styled-components";

export const WrapperSpin = styled.div`
  width: 100%;
  height: ${({ viewHeight }) => viewHeight || "100vh"};
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #00000074;
  z-index: 999999;
`;
