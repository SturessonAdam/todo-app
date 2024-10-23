import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from '../models/Todo'
import TodoList from './TodoList';


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
        <h1>Todos</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  )
}
 export default TodoWrapper;