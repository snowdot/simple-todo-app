import React from 'react';

// Class-Based Component
class TodoItem extends React.Component {
    render() {
        const { completed, id, title } = this.props.todo;

        const completedStyle = {
            color: 'firebrick',
            opacity: 0.6,
            textDecoration: 'line-through',
        }

        return <li className="todo-item">
            <label>
                <input 
                    type="checkbox"
                    checked={completed} 
                    onChange={() => this.props.handleChangeProps(id)}
                />
                <span className="checkmark"></span>
            </label>
            <button onClick={() => this.props.deleteTodoProps(id)}>
                x
            </button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
        </li>;
    }
}

export default TodoItem;