import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import {
  addNewTask,
  deleteTask,
  kanbanModalModeDelete,
  kanbanModalModeEdit,
  kanbanModalModeNewTask,
  toggleKanbanModal,
  updateTask,
} from "../redux/actions";
import { MenuItem } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function KanbanBoardModal(props) {
  const [inputDelete, setInputDelete] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(props.statuses[0]);
  const [priority, setPriority] = useState(
    props.priorities[props.priorities.length - 1]
  );

  const handleButtonCancel = () => {
    props.toggleKanbanModal({}, "");
    setInputDelete("");
    setName("");
    setDescription("");
    setStatus(props.statuses[0]);
    setPriority(props.priorities[props.priorities.length - 1]);
  };

  useEffect(() => {
    if (props.isOpen) {
      setName(props.task.name);
      setDescription(props.task.description);
    }
  }, [props.isOpen]);

  const handleButtonAddNewTask = () => {
    const newTask = {
      name: name,
      description: description,
      status: status,
      priority: priority,
    };
    props.addNewTask(newTask);
    props.toggleKanbanModal({}, "");
  };

  const handleButtonDelete = () => {
    props.deleteTask(props.task.id);
    props.toggleKanbanModal({}, "");
    setInputDelete("");
  };

  const handleButtonSave = () => {
    const newTask = {
      ...props.task,
      name: name,
      description: description,
    };
    props.updateTask(newTask);
    props.toggleKanbanModal({}, "");
  };

  // On click Button Delete
  if (props.mode === kanbanModalModeDelete) {
    return (
      <div>
        <Modal
          open={props.isOpen}
          // onClose={}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Delete task
            </Typography>
            <Typography
              id="modal-modal-description"
              component={"div"}
              sx={{ mt: 2 }}
            >
              <div>Enter the name:</div>
              <div className="text-center fw-bold" style={{ marginTop: "8px" }}>
                {props.task.name}
              </div>
            </Typography>

            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mt: 1, width: "333px" }}
              value={inputDelete}
              onChange={(event) => setInputDelete(event.target.value)}
            />

            <div style={{ marginTop: "16px" }}>
              <Button
                onClick={handleButtonDelete}
                disabled={inputDelete !== props.task.name}
              >
                Delete
              </Button>
              <Button onClick={handleButtonCancel}>Cancel</Button>
            </div>
          </Box>
        </Modal>
      </div>
    );

    // On click Button Edit
  } else if (props.mode === kanbanModalModeEdit) {
    return (
      <div>
        <Modal
          open={props.isOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit task
            </Typography>

            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={name}
              onChange={(event) => setName(event.target.value)}
              sx={{ mt: 2, width: "333px" }}
            />

            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              sx={{ mt: 2, width: "333px" }}
            />

            <div style={{ marginTop: "16px" }}>
              <Button
                onClick={handleButtonSave}
                disabled={!name || !description}
              >
                Save
              </Button>
              <Button onClick={handleButtonCancel}>Cancel</Button>
            </div>
          </Box>
        </Modal>
      </div>
    );

    // On click Button Add New Task
  } else if (props.mode === kanbanModalModeNewTask) {
    return (
      <div>
        <Modal
          open={props.isOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add New Task
            </Typography>

            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={name}
              onChange={(event) => setName(event.target.value)}
              sx={{ mt: 2, width: "333px" }}
            />

            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              sx={{ mt: 2, width: "333px" }}
            />

            <TextField
              id="standard-basic"
              select
              label="Status"
              defaultValue={status}
              // helperText="Please select status"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => setStatus(event.target.value)}
              sx={{ mt: 2, width: "166px" }}
            >
              {props.statuses.map((status, index) => (
                <MenuItem key={index} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-basic"
              select
              label="Priority"
              defaultValue={priority}
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => setPriority(event.target.value)}
              sx={{ mt: 2, width: "166px" }}
            >
              {props.priorities.map((priority, index) => (
                <MenuItem key={index} value={priority}>
                  {priority}
                </MenuItem>
              ))}
            </TextField>

            <div style={{ marginTop: "16px" }}>
              <Button
                onClick={handleButtonAddNewTask}
                disabled={!name || !description}
              >
                Create
              </Button>
              <Button onClick={handleButtonCancel}>Cancel</Button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.kanbanModalData.isOpen,
  task: state.kanbanModalData.task,
  mode: state.kanbanModalData.mode,
  statuses: state.statuses,
  priorities: state.priorities,
});

const mapDispatchToProps = (dispatch) => ({
  toggleKanbanModal: (task, mode) => dispatch(toggleKanbanModal(task, mode)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  updateTask: (task) => dispatch(updateTask(task)),
  addNewTask: (task) => dispatch(addNewTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoardModal);
