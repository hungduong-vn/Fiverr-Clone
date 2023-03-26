import { CHANGE_FAV_JOBS } from "../types/job.types";

const DEFAULT_STATE = { favJobs: { latestChangeAt: null } };

const jobReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_FAV_JOBS:
      console.log("change favJobs");
      state.favJobs.isChanged = payload;
      return { ...state };

    default:
      return state;
  }
};

export default jobReducer;
