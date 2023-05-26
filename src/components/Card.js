import { connect } from "react-redux";
import {
  changeTaskPriority,
  changeTaskStatus,
  kanbanModalModeDelete,
  kanbanModalModeEdit,
  toggleKanbanModal,
} from "../redux/actions";

function Card(props) {
  return (
    <div className="card" style={props.index ? { marginTop: "16px" } : null}>
      <div className="card-body">
        <h5 className="card-title">{props.task.name}</h5>
        <p className="card-text">{props.task.description}</p>
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
            onClick={() => props.changeTaskStatus(props.task.id, -1)}
            disabled={props.task.status === props.statuses[0]}
          >
            ←
          </button>
          {props.task.status}
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ width: "36px", height: "36px", padding: "0" }}
            onClick={() => props.changeTaskStatus(props.task.id, 1)}
            disabled={
              props.task.status === props.statuses[props.statuses.length - 1]
            }
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
            onClick={() => props.changeTaskPriority(props.task.id, 1)}
            disabled={
              props.task.priority ===
              props.priorities[props.priorities.length - 1]
            }
          >
            ↓
          </button>
          Priority: {props.task.priority}
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ width: "28px", height: "28px", padding: "0" }}
            onClick={() => props.changeTaskPriority(props.task.id, -1)}
            disabled={props.task.priority === props.priorities[0]}
          >
            ↑
          </button>
        </li>
      </ul>

      {/*Buttons*/}
      <div className="card-body">
        <button
          type="button"
          className="btn btn-outline-warning"
          style={{ width: "72px" }}
          onClick={() =>
            props.toggleKanbanModal(props.task, kanbanModalModeEdit)
          }
        >
          Edit
        </button>{" "}
        <button
          type="button"
          className="btn btn-outline-danger"
          style={{ width: "72px" }}
          onClick={() =>
            props.toggleKanbanModal(props.task, kanbanModalModeDelete)
          }
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
  changeTaskStatus: (id, changeValue) =>
    dispatch(changeTaskStatus(id, changeValue)),
  changeTaskPriority: (id, changeValue) =>
    dispatch(changeTaskPriority(id, changeValue)),
  toggleKanbanModal: (task, mode) => dispatch(toggleKanbanModal(task, mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
