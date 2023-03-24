import React from "react";
import UserJobsSection from "../UserJobsSection/UserJobsSection";

export default function FavGigs() {
  const title = "My Favorite Gigs";
  return (
    <div>
      <UserJobsSection sectionTitle={title} />
    </div>
  );
}
