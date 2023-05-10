import Card from "./Card";
import { connect } from "react-redux";

function Column({ status, tasks }) {
  return (
    <div className="col">
      <div>
        <h3>{status}</h3>
      </div>

      <div>
        {tasks
          .filter((task) => task.status === status)
          .sort((task1, task2) => task1.priority - task2.priority)
          .map((task) => (
            <Card key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(Column);
