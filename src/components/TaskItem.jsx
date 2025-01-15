const TaskItem = ({ serialnumber, task, TaskComplete, deleteTask }) => {
  return (
    <li className="task-item">
      <span className="serial-number">{serialnumber}. </span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => TaskComplete(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
      <small className="task-date">{task.date}</small>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
