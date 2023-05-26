import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";
import { updateTask } from "../redux/actions";
import { connect } from "react-redux";

function EditTodoModal({ task, updateTask }) {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleClear = () => {
    setModal(!modal);
    setName(task.name);
    setDescription(task.description);
  };

  const handleButtonSave = () => {
    const taskUpdated = {
      ...task,
      name: name,
      description: description,
    };
    updateTask(taskUpdated);
    toggle();
  };

  return (
    <>
      <Button
        color="outline-warning"
        style={{ width: "72px" }}
        onClick={toggle}
      >
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Edit task</ModalHeader>
        <ModalBody>
          <div className="mb-3">
            {/*Name*/}
            <label htmlFor="basic-url" className="form-label">
              Name
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <br />
            {/*Description*/}
            <label htmlFor="basic-url" className="form-label">
              Description
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            style={{ width: "72px", margin: "2px" }}
            onClick={handleButtonSave}
          >
            Save
          </Button>
          <Button
            color="secondary"
            style={{ width: "72px", margin: "2px" }}
            onClick={toggleClear}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateTask: (task) => dispatch(updateTask(task)),
});

export default connect(null, mapDispatchToProps)(EditTodoModal);
