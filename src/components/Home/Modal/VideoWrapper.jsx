import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  width: 100%;
  height: 100%;
  video {
    width: 100%;
    object-fit: cover;
  }
`;

export default function VideoWrapper({ video }) {
  return <Styled className="modal-content-body">{video}</Styled>;
}
