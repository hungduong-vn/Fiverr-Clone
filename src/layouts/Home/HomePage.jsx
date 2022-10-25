import React from "react";
import Carousel from "../../pages/HomePage/Carousel/Carousel";
import Introduction from "../../pages/HomePage/Introduction/Introduction";
import Marketplace from "../../pages/HomePage/Marketplace/Marketplace";
import PopularServices from "../../pages/HomePage/PopularServices/PopularServices";
import Testimonials from "../../pages/HomePage/Testimonials/Testimonials";
import TrustedBy from "../../pages/HomePage/TrustedBy/TrustedBy";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <TrustedBy />
      <PopularServices />
      <Introduction />
      <Testimonials />
      <Marketplace/>
    </>
  );
}
