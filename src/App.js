import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {

    fetch("http://localhost:8080/tasks")
      .then(response => response.json())
      .then(data => setTasks(data));
  };

  const createTask = () => {

    fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title
      })
    })
      .then(response => response.json())
      .then(() => {
        fetchTasks();
        setTitle("");
      });
  };

  const deleteTask = (id) => {

  fetch(`http://localhost:8080/tasks/${id}`, {
    method: "DELETE"
    })
      .then(() => fetchTasks());
  };


  const putTask = () => {

    fetch(`http://localhost:8080/tasks/${editingTaskId}`, {

      method: "PUT",

      headers: {
       "Content-Type": "application/json"
      },

      body: JSON.stringify({
        title: updatedTitle
      })

    })
      .then(response => response.json())
      .then(() => {

        fetchTasks();

        setIsModalOpen(false);

        setUpdatedTitle("");
      });

  };

  const openEditModal = (task) => {

        setEditingTaskId(task.id);

        setUpdatedTitle(task.title);

        setIsModalOpen(true);
  };




  return (
  <div className="app">

    <h1 className="title">
      Todo App
    </h1>

    <div className="input-container">

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />

      <button
        className="add-btn"
        onClick={createTask}
      >
        Add
      </button>

    </div>

    {tasks.map(task => (

      <div className="task" key={task.id}>

        <span className="task-title">
          {task.title}
        </span>

        <div className="buttons">

          <button
            className="edit-btn"
            onClick={() => openEditModal(task)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>

        </div>

      </div>
    ))}

    {isModalOpen && (

      <div className="modal-overlay">

        <div className="modal">

          <h2>Edit Task</h2>

          <input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="New title"
          />

          <div className="modal-buttons">

            <button
              className="save-btn"
              onClick={putTask}
            >
              Save
            </button>

            <button
              className="cancel-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>

          </div>

        </div>

      </div>
    )}

  </div>

  );

  
}

export default App;