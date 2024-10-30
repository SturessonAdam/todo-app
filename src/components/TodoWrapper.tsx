import { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import Todo from '../models/Todo'
import TodoList from './TodoList';
import '../styles/todoWrapper.css'


function TodoWrapper(){
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

  return (
    <div className='todo-wrapper'>
        <div className='todo-container'>
            <h1>Todos</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </div>
    </div>
  )
}
 export default TodoWrapper;