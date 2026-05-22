function TaskModal({
  isModalOpen,
  updatedTitle,
  setUpdatedTitle,
  putTask,
  setIsModalOpen
}) {

  if (!isModalOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Edit Task</h2>

        <input
          value={updatedTitle}
          onChange={(e) =>
            setUpdatedTitle(e.target.value)
          }
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
  );
}

export default TaskModal;