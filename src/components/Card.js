import { connect } from "react-redux";
import { changeTaskPriority, changeTaskStatus } from "../redux/actions";
import EditTaskModal from "./EditTaskModal";

function Card({
  task,
  statuses,
  priorities,
  onClickChangeTaskStatus,
  onCLickChangeTaskPriority,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{task.name}</h5>
        <p className="card-text">{task.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        {/*Status*/}
        <li
          className="list-group-item d-flex justify-content-center align-items-center gap-1"
          style={{ minHeight: "52px" }}
        >
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ width: "36px", height: "36px", padding: "0" }}
            onClick={() => onClickChangeTaskStatus(task.id, -1)}
            disabled={task.status === statuses[0]}
          >
            ←
          </button>
          {task.status}
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ width: "36px", height: "36px", padding: "0" }}
            onClick={() => onClickChangeTaskStatus(task.id, 1)}
            disabled={task.status === statuses[statuses.length - 1]}
          >
            →
          </button>
        </li>

        {/*Priority*/}
        <li
          className="list-group-item d-flex justify-content-center align-items-center gap-1"
          style={{ minHeight: "52px" }}
        >
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ width: "28px", height: "28px", padding: "0" }}
            onClick={() => onCLickChangeTaskPriority(task.id, 1)}
            disabled={task.priority === priorities[priorities.length - 1]}
          >
            ↓
          </button>
          Priority: {task.priority}
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ width: "28px", height: "28px", padding: "0" }}
            onClick={() => onCLickChangeTaskPriority(task.id, -1)}
            disabled={task.priority === priorities[0]}
          >
            ↑
          </button>
        </li>
      </ul>

      {/*Buttons*/}
      <div className="card-body">
        <EditTaskModal task={task} />{" "}
        <button
          type="button"
          className="btn btn-outline-danger"
          style={{ width: "72px" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  statuses: state.statuses,
  priorities: state.priorities,
});

const mapDispatchToProps = (dispatch) => ({
  onClickChangeTaskStatus: (id, changeValue) =>
    dispatch(changeTaskStatus(id, changeValue)),
  onCLickChangeTaskPriority: (id, changeValue) =>
    dispatch(changeTaskPriority(id, changeValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
