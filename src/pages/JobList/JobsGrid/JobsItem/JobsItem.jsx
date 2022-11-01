import React from "react";
import styled from "styled-components";
import { styles } from "../../../../constants/styles";
import JobsItemBody from "./JobsItemBody";
import JobsItemFoot from "./JobsItemFoot";
import JobsItemThumb from "./JobsItemThumb";

const Styled = styled.div`
  border: 1px solid ${styles.colorLight};
  &:hover {
    .jobs-name {
      color: ${styles.colorFiverr};
    }
  }
`;

export default function JobsItem({ job, avatar, meta }) {
  // console.log({job});
  const user = { name: meta.tenNguoiTao, ava: avatar };

  return (
    <Styled>
      <JobsItemThumb img={job.hinhAnh} />
      <JobsItemBody
        user={user}
        jobName={job.tenCongViec}
        star={job.saoCongViec}
        reviewCount={job.danhGia}
      />
      <JobsItemFoot price={job.giaTien} />
    </Styled>
  );
}
