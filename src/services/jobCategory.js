import { request } from "../configs/axios";

const getJobCats = () =>
  request({
    url: "jobCategory/getAllJobCats",
    method: "GET",
  });

export { getJobCats };
