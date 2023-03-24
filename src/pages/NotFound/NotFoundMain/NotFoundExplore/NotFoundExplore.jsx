import React from "react";
import CarouselSearchBar from "../../../HomePage/Carousel/CarouselSearch/CarouselSearchBar/CarouselSearchBar";
import CarouselSearchPopular from "../../../HomePage/Carousel/CarouselSearch/CarouselSearchPopular";

export default function NotFoundExplore() {
  return (
    <div className="not-found-explore mt-4">
      <CarouselSearchBar />
      <CarouselSearchPopular />
    </div>
  );
}
