import TaskItem from './TaskItem';

const TaskList = ({ tasks, TaskComplete, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          TaskComplete={TaskComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
