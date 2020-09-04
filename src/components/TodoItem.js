import React, { useEffect } from 'react';
import { render } from '@testing-library/react';

const TodoItem = props => {
    useEffect(() => {
        return () => {
            alert('Item about to be deleted.');
        }
    }, [])

    const { completed, id, title } = props.todo;

    const completedStyle = {
        color: 'firebrick',
        opacity: 0.6,
        textDecoration: 'line-through',
    }

    return (
        <li className="todo-item">
            <label>
                <input 
                    type="checkbox"
                    checked={completed} 
                    onChange={() => props.handleChangeProps(id)}
                />
                <span className="checkmark"></span>
            </label>
            <button onClick={() => props.deleteTodoProps(id)}>
                x
            </button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
        </li>
    )
}

export default TodoItem;