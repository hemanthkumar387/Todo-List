import ToDoItem from "../TodoItem/TodoItem";

function ToDoList({ tasks, deleteTask, toggleCompletion, editTask }) {
  return (
    <ul className="todo-list">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <ToDoItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
          editTask={editTask} />
        ))
      ) : (
        <p className="empty-message">No tasks!</p>
      )}
    </ul>
  );
}

export default ToDoList;
