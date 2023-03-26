import { request } from "../configs/axios";
import { jobs } from "../pages/JobList/JobsGrid/data";

const getJobById = async (id) => {
  // HARD CODED data
  const job = jobs.filter((job) => job.id === id);
  const result = { data: { content: null } };
  result.data.content = job.length > 0 ? job[0] : null;
  return result;
  // axios
};

const getJobsApi = async () => request({ method: "GET", url: "job/get-jobs" });

const getJobsByUserApi = async ({ userId, userName }) =>
  request({
    method: "GET",
    url: `/job/get-jobs-by-user?userId=${userId || ""}&userName=${userName || ""}`,
  });

const getLovedJob = async ({ userId, jobId }) =>
  request({
    url: `job/get-loved-job?userId=${userId}&jobId=${jobId}`,
    method: "GET",
  });
const getLovedJobByUserIdApi = async (userId) =>
  request({ method: "GET", url: `job/get-loved-job-by-user-id/${userId}` });

const addLovedJob = async (userId, jobId) =>
  request({
    url: `job/add-loved-job`,
    method: "POST",
    data: { userId, jobId },
  });

const removeLovedJob = async (userId, jobId) =>
  request({
    url: `job/remove-loved-job`,
    method: "DELETE",
    data: { userId, jobId },
  });

export {
  getJobsApi,
  getJobById,
  getJobsByUserApi,
  getLovedJob,
  getLovedJobByUserIdApi,
  addLovedJob,
  removeLovedJob,
};
