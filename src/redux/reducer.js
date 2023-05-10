import {
  ADD_NEW_TASK,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_PRIORITY,
  EDIT_TASK,
  DELETE_TASK,
} from "./actions";

const initialState = {
  tasks: [
    {
      id: 111,
      name: "task 1",
      description: "do kanban",
      status: "todo",
      priority: 1,
    },
    {
      id: 112,
      name: "task 2",
      description: "do list",
      status: "in progress",
      priority: 2,
    },
    {
      id: 113,
      name: "task 3",
      description: "do homework",
      status: "in progress",
      priority: 3,
    },
    {
      id: 114,
      name: "task 4",
      description: "do articles",
      status: "in review",
      priority: 4,
    },
    {
      id: 115,
      name: "task 5",
      description: "do list of profitable goods",
      status: "done",
      priority: 5,
    },
  ],
  statuses: ["todo", "in progress", "in review", "done"],
  priorities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  title: "Kanban Board",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return state;

    case EDIT_TASK:
      return state;

    case DELETE_TASK:
      return state;

    case CHANGE_TASK_STATUS:
      const statusIndex = state.statuses.indexOf(
        state.tasks.filter((task) => task.id === action.payload.id)[0].status
      );
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                status:
                  state.statuses[statusIndex + action.payload.changeValue],
              }
            : task
        ),
      };

    case CHANGE_TASK_PRIORITY:
      const priorityIndex = state.priorities.indexOf(
        state.tasks.filter((task) => task.id === action.payload.id)[0].priority
      );
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
              ...task,
              priority:
                state.priorities[priorityIndex] + action.payload.changeValue,
            }
            : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;
