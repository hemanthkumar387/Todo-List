import { useState } from "react";
import './TodoItem.css'

function ToDoItem({ task, deleteTask, toggleCompletion, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          className="todo-edit"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span className={task.completed ? "todo-completed" : "todo-edited"}>
          {task.text}
        </span>
      )}

      <div className="todo-save-edit-btn">
        {isEditing ? (
          <button onClick={saveEdit} className="todo-save-btn">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="todo-edit-btn">
            Edit
          </button>
        )}
        <button
          onClick={() => toggleCompletion(task.id)}
          className="todo-undo"
        >
          {task.completed ? "Undo" : "Mark completed"}
        </button>
        <button onClick={() => deleteTask(task.id)} className="todo-delete">
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
