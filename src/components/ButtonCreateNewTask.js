import { kanbanModalModeNewTask, toggleKanbanModal } from "../redux/actions";
import { connect } from "react-redux";

function ButtonCreateNewTask(props) {
  return (
    <div style={{ marginTop: "8px" }}>
      <button
        type="button"
        className="btn btn-outline-success"
        style={{ width: "128px" }}
        onClick={() =>
          props.toggleKanbanModal(
            { name: "", description: "" },
            kanbanModalModeNewTask
          )
        }
      >
        Add New Task
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleKanbanModal: (task, mode) => dispatch(toggleKanbanModal(task, mode)),
});

export default connect(null, mapDispatchToProps)(ButtonCreateNewTask);
