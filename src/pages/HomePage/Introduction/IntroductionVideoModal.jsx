import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setShowIntroVideoModal } from "../../../store/actions/layout.actions";

const Styled = styled.div`
  &.shown {
    transform: translateY(0);
    opacity: 1;
  }
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateY(100vh);
  .introduction-video-wrapper {
    background-color: transparent;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .modal-content-body {
    padding: 0;
    background-color: transparent;
    border-radius: 4px;
    overflow-y: auto;
    padding: 15px;
    video {
      width: 100%;
      object-fit: cover;
    }
  }
  .introduction-video-modal-overlay {
    background-color: rgba(0, 0, 0, 0.65);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: 9999; */
  }
  @media only screen and (min-width: 600px) {
    transition: opacity 0.15s;
    opacity: 0;
    &.shown {
      transform: translateY(0);
      opacity: 1;
    }
    .introduction-video-wrapper {
      width: 70vw;
      max-height: 90vh;
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      border-radius: 4px;
    }
  }
  @media only screen and (min-width: 900px) {
    .introduction-video-wrapper {
      max-width: 900px;
    }
  }
`;

export default function IntroductionVideoModal() {
  const { showIntroVideo } = useSelector((state) => state.layoutReducer);
  const dispatch = useDispatch();
  // const [isShown, setIsShown] = useState(showIntroVideo);
  // console.log(isShown);
  console.log(showIntroVideo);
  return (
    <Styled className={`${showIntroVideo ? "shown" : ""}`}>
      <div
        className="introduction-video-modal-overlay"
        onClick={() => {
          dispatch(setShowIntroVideoModal(false));
          // setIsShown(false);
        }}
      ></div>
      <div className="introduction-video-wrapper">
        <section className="MODAL__modal-content-body-u9ca5eeb6 modal-content-body rounded-corners">
          <video
            className="orca-video"
            autoPlay
            controls
            poster
            preload="metadata"
            crossOrigin="anonymous"
          >
            <source
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              type="video/mp4"
            />
            <track
              label="EN"
              srcLang="en-US"
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_en-US.00c8c11.vtt"
              default
              kind="subtitles"
            />
            <track
              label="DE"
              srcLang="de-DE"
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_de-DE.479343e.vtt"
              kind="subtitles"
            />
            <track
              label="ES"
              srcLang="es"
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_es.0e7d9ce.vtt"
              kind="subtitles"
            />
            <track
              label="FR"
              srcLang="fr-FR"
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_fr-FR.62936b3.vtt"
              kind="subtitles"
            />
            <track
              label="IT"
              srcLang="it-IT"
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_it-IT.15d2b21.vtt"
              kind="subtitles"
            />
            <track
              label="NL"
              srcLang="nl-NL"
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_nl-NL.23e247e.vtt"
              kind="subtitles"
            />
            <track
              label="PT"
              srcLang="pt-BR"
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_pt-BR.b8ba68e.vtt"
              kind="subtitles"
            />
          </video>
        </section>
      </div>
    </Styled>
  );
}
