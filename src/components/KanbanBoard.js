import { connect } from "react-redux";
import Column from "./Column";
import KanbanBoardModal from "./KanbanBoardModal";
import ButtonCreateNewTask from "./ButtonCreateNewTask";

function KanbanBoard({ title, statuses }) {
  return (
    <div>
      <h1>{title}</h1>
      <ButtonCreateNewTask />
      <div className="container text-center" style={{marginTop: "8px"}}>
        <div className="row align-items-start">
          {statuses.map((status, index) => (
            <Column key={index} status={status} />
          ))}
        </div>
      </div>
      <KanbanBoardModal />
    </div>
  );
}

const mapStateToProps = (state) => ({
  title: state.title,
  statuses: state.statuses,
});

export default connect(mapStateToProps)(KanbanBoard);
