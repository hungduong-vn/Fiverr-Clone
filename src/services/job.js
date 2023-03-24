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

const getLovedJob = async ({ userId, jobId }) =>
  request({
    url: `job/get-loved-job?userId=${userId}&jobId=${jobId}`,
    method: "GET",
  });

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

export { getJobById, getLovedJob, addLovedJob, removeLovedJob };
