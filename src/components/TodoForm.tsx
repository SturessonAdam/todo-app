import React, { useState } from 'react'
import '../styles/todoForm.css'

type TodoProps = {
    addTodo: (text: string) => void;
};

function TodoForm({ addTodo } : TodoProps) {

    const [inputValue, setInputValue] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        addTodo(inputValue);
        setInputValue('');
    };

  return (
    <div className='form-wrapper'>
        <form onSubmit={handleSubmit}>
            <input
            className='todo-form'
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Add a new todo'
            />
            <button type='submit'>
            <i className="fa-solid fa-check"></i>
            </button>
        </form>
    </div>
  )
}

export default TodoForm;