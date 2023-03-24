import React from "react";
import FavGigs from "./FavGigs/FavGigs";
import HiredGigs from "./HiredGigs/HiredGigs";
import SellingGigs from "./SellingGigs/SellingGigs";

export default function UserJobs() {
  return (
    <div>
      <FavGigs />
      <HiredGigs />
      <SellingGigs />
    </div>
  );
}
