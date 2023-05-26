export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS";
export const CHANGE_TASK_PRIORITY = "CHANGE_TASK_PRIORITY";
export const TOGGLE_KANBAN_MODAL = "TOGGLE_KANBAN_MODAL";

export const addNewTask = (task) => ({
  type: ADD_NEW_TASK,
  payload: task,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

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

export const toggleKanbanModal = (task, mode) => ({
  type: TOGGLE_KANBAN_MODAL,
  payload: {
    task,
    mode,
  },
});

export const kanbanModalModeNewTask = "kanbanModalModeNewTask";
export const kanbanModalModeEdit = "kanbanModalModeEdit";
export const kanbanModalModeDelete = "kanbanModalModeDelete";
