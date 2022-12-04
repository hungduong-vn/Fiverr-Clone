import { request } from "../configs/axios";

const getJobCats = () =>
  request({
    url: "jobCategory/get-job-categories-names",
    method: "GET",
  });

const getMenuJobCats = () =>
  request({ url: "jobCategory/get-job-categories-menu", method: "GET" });

const getJobCatRenderDataById = (id) =>
  request({
    url: `jobCategory/get-job-categories-render-data/${id}`,
    method: "GET",
  });

export { getJobCats, getMenuJobCats, getJobCatRenderDataById };
