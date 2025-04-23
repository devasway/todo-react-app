// src/components/TodoList.tsx

import { Todo } from '../types/todo';

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
};

export default function TodoList({ todos, onToggle }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
}
