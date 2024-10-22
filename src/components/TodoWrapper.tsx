import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from '../models/Todo'


function TodoWrapper(){
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id? {...todo, completed: !todo.completed } : todo
        ));
    };

  return (
    <div>
        <TodoForm addTodo={addTodo} />
    </div>
  )
}
 export default TodoWrapper;