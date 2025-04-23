import './App.css';
import { useState } from 'react';
import TodoInput from './component/TodoInput';
import { Todo } from './types/todo';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const handleToggle = (id: number) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-do App</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  );
}

export default App;
