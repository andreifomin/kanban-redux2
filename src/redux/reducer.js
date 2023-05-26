import { v4 as uuidv4 } from "uuid";
import {
  ADD_NEW_TASK,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_PRIORITY,
  UPDATE_TASK,
  DELETE_TASK,
  TOGGLE_KANBAN_MODAL,
} from "./actions";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      name: "task 1",
      description: "do kanban",
      status: "todo",
      priority: 1,
    },
    {
      id: uuidv4(),
      name: "task 2",
      description: "do list",
      status: "in progress",
      priority: 2,
    },
    {
      id: uuidv4(),
      name: "task 3",
      description: "do homework",
      status: "in progress",
      priority: 3,
    },
    {
      id: uuidv4(),
      name: "task 4",
      description: "do articles",
      status: "in review",
      priority: 4,
    },
    {
      id: uuidv4(),
      name: "task 5",
      description: "do list of profitable goods",
      status: "done",
      priority: 5,
    },
  ],
  statuses: ["todo", "in progress", "in review", "done"],
  priorities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  title: "Kanban Board",

  kanbanModalData: {
    isOpen: false,
    task: {},
    mode: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, id: uuidv4() }],
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                name: action.payload.name,
                description: action.payload.description,
              }
            : task
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case CHANGE_TASK_STATUS:
      const statusIndex = state.statuses.indexOf(
        state.tasks.find((task) => task.id === action.payload.id).status
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

    case TOGGLE_KANBAN_MODAL:
      return {
        ...state,
        kanbanModalData: {
          ...state.kanbanModalData,
          isOpen: !state.kanbanModalData.isOpen,
          task: action.payload.task,
          mode: action.payload.mode,
        },
      };

    default:
      return state;
  }
};

export default reducer;
