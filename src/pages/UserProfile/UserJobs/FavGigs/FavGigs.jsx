import React from "react";
import { useSelector } from "react-redux";
import EmptyFavJobIcon from "../../../../components/Svg/EmptyFavJobIcon";
import { useAsync } from "../../../../hooks/useAsync";
import { getLovedJobByUserIdApi } from "../../../../services/job";
import UserJobsSection from "../UserJobsSection/UserJobsSection";

export default function FavGigs() {
  const title = "My Favorite Gigs";
  const {
    userInfo: { id },
  } = useSelector((state) => state.userReducer);
  const { favJobs } = useSelector((state) => state.jobReducer);
  const isFavJobsChanged = favJobs.isChanged;
  const { state: lovedJobs } = useAsync({
    service: () => getLovedJobByUserIdApi(id),
    deps: [isFavJobsChanged],
  });
  // console.log({ lovedJobs });

  const emptyState = {
    Icon: EmptyFavJobIcon,
    heading: "Need some inspiration?",
    buttonText: "Explore more",
  };
  return (
    <div>
      {lovedJobs && (
        <UserJobsSection
          listData={lovedJobs}
          sectionTitle={title}
          emptyState={emptyState}
        />
      )}
    </div>
  );
}
