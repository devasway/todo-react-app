import './App.css'
import { useState } from 'react'
import TodoInput from './component/TodoInput'
import { Todo } from './types/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  }

  return (
    <div style={{ padding: '20px'}}>
      <h1>To-do App</h1>
      <TodoInput onAdd={handleAdd}/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
