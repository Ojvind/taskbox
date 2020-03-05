import actionTypes from "./action-types";

// The action creators bundle action with the data required to execute them
export const archiveTask = id => ({ type: actionTypes.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actionTypes.PIN_TASK, id });
