import TaskItem from "./TaskItem";

const TaskList = ({ tasks, TaskComplete, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          serialnumber={index + 1}
          task={task}
          TaskComplete={TaskComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
