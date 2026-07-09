import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function ToDosPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const filteredTodos = todos.filter(todo => {
  if (filter === "completed") return todo.completed;
  if (filter === "incomplete") return !todo.completed;
  return true; // "all"
});

  function addTodo(e) {
    e.preventDefault();

    if (!input.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false
      }
    ]);

    setInput("");
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <div className="mb-3">
        <Button
          variant={filter === "all" ? "primary" : "outline-primary"}
          onClick={() => setFilter("all")}
          className="me-2"
        >
          All
        </Button>

        <Button
          variant={filter === "incomplete" ? "primary" : "outline-primary"}
          onClick={() => setFilter("incomplete")}
          className="me-2"
        >
          Incomplete
        </Button>

        <Button
          variant={filter === "completed" ? "primary" : "outline-primary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>
      <h1>To-Do List</h1>

      <Form onSubmit={addTodo} className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" className="mt-2">
          Add
        </Button>
      </Form>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {todo.text}
            </span>

            {todo.completed && (
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDosPage