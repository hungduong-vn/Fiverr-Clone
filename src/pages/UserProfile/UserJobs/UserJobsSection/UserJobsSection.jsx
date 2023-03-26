import React from "react";
import styled from "styled-components";
import CustomSlider from "../../../../components/Home/Slider/CustomSlider";
import { breakpoints } from "../../../../constants/common";
import { jobs } from "../../../JobList/JobsGrid/data";
import JobsItem from "../../../JobList/JobsGrid/JobsItem/JobsItem";
import UserJobsEmpty from "../UserJobsEmpty/UserJobsEmpty";

export default function UserJobsSection({
  sectionTitle,
  listData,
  customSlide,
  emptyState,
}) {
  const data = listData || jobs;
  const sliderSettings = {
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: breakpoints.extraLarge,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: breakpoints.large,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Styled>
      <h4 className="user-jobs-section-title">{sectionTitle}</h4>
      {data?.length > 0 ? (
        <CustomSlider settings={sliderSettings}>
          {data.map((ele, idx) => {
            const { seller, ...rest } = ele;
            const job = ele.job || rest;
            return (
              <div className="pr-2" key={idx}>
                <JobsItem job={job} seller={seller} />
              </div>
            );
          })}
        </CustomSlider>
      ) : (
        <UserJobsEmpty Icon={emptyState.Icon} heading={emptyState.heading} buttonText={emptyState.buttonText}/>
      )}
    </Styled>
  );
}
const Styled = styled.div`
  margin-top: 3rem;
  .user-jobs-section-title {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: ${breakpoints.medium}px) {
    margin-top: 0;
    margin-bottom: 3rem;
  }
  .slick-track {
    margin-left: 0;
  }
`;
