import React from "react";
import styled from "styled-components";
import CustomSlider from "../../../components/Home/Slider/CustomSlider";
import { galleryData } from "../data";

export default function JobDetailGallery({ gallery }) {
  const images = gallery || galleryData;
  return (
    <Styled>
      <CustomSlider>
        {images.map((image, idx) => (
          <div className="job-gallery" key={idx}>
            <img src={image.url} alt="job-gallery" />
          </div>
        ))}
      </CustomSlider>
    </Styled>
  );
}

const Styled = styled.div`
  .job-gallery {
    /* position: relative; */
  }
  img {
    width: 100%;
  }
`;
