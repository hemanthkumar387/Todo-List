import { useState } from "react";
import Header from "./components/Header/Header";
import ToDoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskId, setTaskId] = useState(1);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: taskId, text: newTask, completed: false }]);
    setNewTask("");
    setTaskId(taskId + 1);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <Header />

      {/* Task Adding Section */}
      <div className="task-section task-add">
        <h2 className="section-title">Add Task</h2>
        <div className="todo-input-div">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="todo-input"
          />
          <button onClick={addTask} className="add-btn">Add</button>
        </div>
      </div>

      {/* Pending Tasks Section */}
      <div className="task-section task-pending">
        <h2 className="section-title">Pending Tasks</h2>
        <ToDoList tasks={tasks.filter(task => !task.completed)} deleteTask={deleteTask} toggleCompletion={toggleCompletion} editTask={editTask} />
      </div>

      {/* Completed Tasks Section */}
      <div className="task-section task-completed">
        <h2 className="section-title">Completed Tasks</h2>
        <ToDoList tasks={tasks.filter(task => task.completed)} deleteTask={deleteTask} toggleCompletion={toggleCompletion} editTask={editTask} />
      </div>
    </div>
  );
}

export default App;
