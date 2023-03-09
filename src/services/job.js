import { jobs } from "../pages/JobList/JobsGrid/data";

const getJobById = async (id) => {
  // HARD CODED data
  const job = jobs.filter((job) => job.id === id);
  const result = { data: { content: null } };
  result.data.content = job.length > 0 ? job[0] : null;
  return result;
  // axios
};

export { getJobById };
