import React from "react";
import Carousel from "../../pages/HomePage/Carousel/Carousel";
import Introduction from "../../pages/HomePage/Introduction/Introduction";
import PopularServices from "../../pages/HomePage/PopularServices/PopularServices";
import TrustedBy from "../../pages/HomePage/TrustedBy/TrustedBy";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <TrustedBy/>
      <PopularServices/>
      <Introduction/>
    </>
  );
}
