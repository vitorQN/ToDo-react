import { useEffect, useState } from "react";
import "./App.css";

import TaskItem from "./components/TaskItem";
import TaskModal from "./components/TaskModal";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTask
} from "./services/api";

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    const data = await getTasks();

    setTasks(data);
  };

  const handleCreateTask = async () => {

    await createTask(title);

    fetchTasks();

    setTitle("");
  };

  const handleDeleteTask = async (id) => {

    await deleteTask(id);

    fetchTasks();
  };


  const putTask = async () => {

    await updateTask(
      editingTaskId,
      updatedTitle
    );

    fetchTasks();

    setIsModalOpen(false);
  };

  const openEditModal = (task) => {

    setEditingTaskId(task.id);

    setUpdatedTitle(task.title);

    setIsModalOpen(true);
  };




  return (
    <div className="app">

      <h1 className="title">
        To-Do App
      </h1>

      <div className="input-container">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
        />

        <button
          className="add-btn"
          onClick={handleCreateTask}
        >
          Add
        </button>

      </div>

      {tasks.map(task => (

        <div className="task" key={task.id}>

          <TaskItem
            key={task.id}
            task={task}
            deleteTask={handleDeleteTask}
            openEditModal={openEditModal}
          />

        </div>
      ))}

      <TaskModal
        isModalOpen={isModalOpen}
        updatedTitle={updatedTitle}
        setUpdatedTitle={setUpdatedTitle}
        putTask={putTask}
        setIsModalOpen={setIsModalOpen}
      />

    </div>

  );


}

export default App;