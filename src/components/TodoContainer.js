import React, { useState, useEffect } from 'react';
import TodoList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const TodoContainer = props => {
    const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(false);

    const handleChange = id => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
        setShow(!show);
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id;
            }),
        ]);
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }

        setTodos([...todos, newTodo]);
    }

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => setTodos(response.data));
    }, []);

    return (
        <div className="container">
            <Header headerSpan={show}/>
            <InputTodo addTodoProps={addTodoItem} />
            <TodoList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
            />
        </div>
    )
}

export default TodoContainer;