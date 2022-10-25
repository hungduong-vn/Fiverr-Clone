import React from "react";
import Carousel from "./HomePage/Carousel/Carousel";
import Introduction from "./HomePage/Introduction/Introduction";
import Marketplace from "./HomePage/Marketplace/Marketplace";
import PopularServices from "./HomePage/PopularServices/PopularServices";
import Testimonials from "./HomePage/Testimonials/Testimonials";
import TrustedBy from "./HomePage/TrustedBy/TrustedBy";
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
