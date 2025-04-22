// src/Todo.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [filter, setFilter] = useState("all");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text && deadline) {
      dispatch(addTodo({ text, deadline }));
      setText("");
      setDeadline("");
    }
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((t) => !t.completed);
      case "completed":
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  };

  const getDeadlineColor = (deadline) => {
    const now = new Date();
    const end = new Date(deadline);
    const diff = end - now;

    if (diff < 0) return "red";
    if (diff <= 86400000) return "goldenrod"; // меньше дня
    return "green";
  };

  const filteredTodos = getFilteredTodos();

  const activeTodos = filteredTodos.filter((t) => !t.completed);
  const completedTodos = filteredTodos.filter((t) => t.completed);

  return (
    <div>
      <h2>ToDo List</h2>

      <div>
        <input
          type="text"
          value={text}
          placeholder="Enter task"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setFilter("all")}>Все</button>
        <button onClick={() => setFilter("active")}>Активные</button>
        <button onClick={() => setFilter("completed")}>Завершённые</button>
      </div>

      <h3>Активные задачи</h3>
      <ul>
        {activeTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
            />
            <span>{todo.text}</span>{" "}
            <span style={{ color: getDeadlineColor(todo.deadline) }}>
              (до {new Date(todo.deadline).toLocaleString()})
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</button>
          </li>
        ))}
      </ul>

      <h3>Завершённые задачи</h3>
      <ul>
        {completedTodos.map((todo) => (
          <li key={todo.id}>
            ✅ {todo.text} — выполнено{" "}
            {new Date(todo.completedAt).toLocaleString()}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;