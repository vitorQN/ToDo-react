function TaskItem({ task, deleteTask, openEditModal }) {

  return (

    <div className="task">

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
  );
}

export default TaskItem;