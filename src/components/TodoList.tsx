import Todo from '../models/Todo'
import '../styles/todoList.css'

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo } : TodoListProps) {

  return (
    <div>
        {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
          <button onClick={(e) => {
            e.stopPropagation();
            deleteTodo(todo.id)}}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
