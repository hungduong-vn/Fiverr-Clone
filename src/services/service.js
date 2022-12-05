import { request } from "../configs/axios";

const getServiceByJobCatId = (id) =>
  request({ url: `service/get-services/job-category/${id}`, method: "GET" });

export { getServiceByJobCatId };
