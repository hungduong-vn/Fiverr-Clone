import React, { useContext } from "react";
import styled from "styled-components";
import { OpenVideoModalContext } from "../../../contexts/Home/VideoModalContext";
import VideoWrapper from "./VideoWrapper";

const Styled = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(${({ isShown }) => (isShown ? 0 : "100vh")});
  opacity: ${({ isShown }) => (isShown ? 1 : 0)};
  transition: opacity 0.15s;
  transition: transform 0.3s ease-in-out;
  width: 100vw;
  height: 100vh;
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    width: 100vw;
    height: 100vh;
  }
  .modal-wrapper {
    position: relative;
  }
  .modal-body {
    padding: 0;
    background-color: transparent;
    border-radius: 4px;
    overflow: hidden;
  }
  @media screen and (min-width: 600px) {
    .modal-wrapper {
      width: 70vw;
      max-height: 90vh;
    }
  }
  @media screen and (min-width: 900px) {
    .modal-wrapper {
      max-width: 900px;
    }
  }
`;

export default function VideoModal() {
  const [state, setState] = useContext(OpenVideoModalContext);
  console.log({ state });

  return (
    <Styled isShown={state.isShown}>
      <div
        className="modal-overlay"
        onClick={() => setState({ ...state, isShown: false })}
      ></div>
      <div className="modal-wrapper">
        <div className="modal-body">
          <VideoWrapper video={state.content} />
        </div>
      </div>
    </Styled>
  );
}
