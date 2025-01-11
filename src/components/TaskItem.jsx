const TaskItem = ({ task, TaskComplete, deleteTask }) => {
    return (
      <li className="task-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => TaskComplete(task.id)}
        />
        <span className={task.completed ? 'completed' : ''}>{task.text}</span>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
      </li>
    );
  };
  
  export default TaskItem;
  