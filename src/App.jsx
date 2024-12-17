import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./slices/todoSlice";
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";

function App() {
  const [task, setTask] = useState("");

  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>To do application</h1>

      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={() => dispatch(addTodo({ id: Date.now(), task: task }))}>
        Add Todo
      </button>
      <ol>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.task}{" "}
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete me
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
