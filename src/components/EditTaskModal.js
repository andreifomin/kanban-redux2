import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";

function EditTaskModal({ task }) {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const onChangeInputName = (event) => {
    setName(event.target.value);
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
        <ModalHeader toggle={toggle}>Edit task</ModalHeader>
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
                onChange={onChangeInputName}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            style={{ width: "72px", margin: "2px" }}
            onClick={toggle}
          >
            Save
          </Button>
          <Button
            color="secondary"
            style={{ width: "72px", margin: "2px" }}
            onClick={toggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default EditTaskModal;
