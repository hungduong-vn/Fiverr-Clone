import React from "react";
import Carousel from "./Carousel/Carousel";
import Introduction from "./Introduction/Introduction";
import Marketplace from "./Marketplace/Marketplace";
import PopularServices from "./PopularServices/PopularServices";
import Testimonials from "./Testimonials/Testimonials";
import TrustedBy from "./TrustedBy/TrustedBy";
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
