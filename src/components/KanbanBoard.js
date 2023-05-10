import { connect } from "react-redux";
import Column from "./Column";

function KanbanBoard({ title, statuses }) {
  return (
    <div>
      <h1>{title}</h1>

      <div className="container text-center">
        <div className="row align-items-start">
          {statuses.map((status, index) => (
            <Column key={index} status={status} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  title: state.title,
  statuses: state.statuses,
});

export default connect(mapStateToProps)(KanbanBoard);
