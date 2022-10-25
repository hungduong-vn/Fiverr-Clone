import React, { useContext } from 'react'
import styled from "styled-components";
import { OpenVideoModalContext } from "../../../contexts/Home/VideoModalContext";

  const Styled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .picture-wrapper {
      position: relative;
      cursor: pointer;
      ::after {
        content: "";
        display: inline-block;
        background: url(https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/desktop-play-button.c1196d6.png)
          no-repeat;
        background-size: 80px;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: 0;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  `;
export default function VideoPlayerFrame({picture, video}) {
  const [_, setVideoModal] = useContext(OpenVideoModalContext);
  const handleClickVideo = () => {
    setVideoModal({ isShown: true, content: video });
  };
  return (
    <Styled className="col-15-xs col-8-md">
      <div className="video-modal">
        <div className="picture-wrapper" onClick={handleClickVideo}>
          {picture}
        </div>
      </div>
    </Styled>
  )
}