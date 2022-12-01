import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { slides } from "../data/defaultData";
import JobCatBanner from "./JobCatBanner/JobCatBanner";
import JobCatSliders from "./JobCatSlider/JobCatSliders";

const Styled = styled.div``;

export default function JobCatTop() {
  const params = useParams();
  console.log({ params });
  const jobCatName = "Graphics & Design";
  const description = "Designs to make you stand out";
  const banner = {
    mobile_img:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415227/graphics-design-mobile.png",
    desktop_img:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415203/graphics-design-desktop.png",
    bg_color: "rgb(11,58,35)",
  };
  return (
    <Styled>
      <JobCatBanner
        name={jobCatName}
        description={description}
        banner={banner}
      />
      <JobCatSliders slides={slides} jobCatName={jobCatName} />
    </Styled>
  );
}
