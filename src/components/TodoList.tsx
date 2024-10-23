import Todo from '../models/Todo'

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo } : TodoListProps) {

  return (
    <div>
        {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </div>
      ))}
    </div>
  )
}

export default TodoList
