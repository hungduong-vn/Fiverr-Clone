import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setShowIntroVideoModal } from "../../../store/actions/layout.actions";

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

export default function IntroductionVideo() {
  const dispatch = useDispatch();
  const handleClickVideo = () => {
    dispatch(setShowIntroVideoModal(true));
  };
  return (
    <Styled className="col-15-xs col-8-md">
      <div className="video-modal">
        <div className="picture-wrapper" onClick={handleClickVideo}>
          <picture>
            <source
              media="(min-width: 1160px)"
              srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <source
              media="(min-width: 900px)"
              srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <source
              media="(min-width: 600px)"
              srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <source
              media="(min-width: 361px)"
              srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <source
              media="(max-width: 360px)"
              srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <img
              alt="Video teaser image"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              loading="auto"
            />
          </picture>
        </div>
      </div>
    </Styled>
  );
}
