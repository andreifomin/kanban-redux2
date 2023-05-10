export const ADD_NEW_TASK = "ADD_NEW_TASK";

export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS";
export const CHANGE_TASK_PRIORITY = "CHANGE_TASK_PRIORITY";

export const changeTaskStatus = (id, changeValue) => ({
  type: CHANGE_TASK_STATUS,
  payload: {
    id,
    changeValue,
  },
});

export const changeTaskPriority = (id, changeValue) => ({
  type: CHANGE_TASK_PRIORITY,
  payload: {
    id,
    changeValue,
  },
});

export const handleEditTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});
