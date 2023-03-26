import { CHANGE_FAV_JOBS } from "../types/job.types";


const changeFavJobs = (data) => ({ type: CHANGE_FAV_JOBS, payload: data });

export { changeFavJobs };
