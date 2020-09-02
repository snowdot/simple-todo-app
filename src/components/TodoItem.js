import React from 'react';

// Class-Based Component
class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            color: 'firebrick',
            opacity: 0.6,
            textDecoration: 'line-through',
        }

        return <li className="todo-item">
            <label>
                <input 
                    type="checkbox"
                    checked={this.props.todo.completed} 
                    onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                />
                <span className="checkmark"></span>
            </label>
            <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                x
            </button>
            <span style={this.props.todo.completed ? completedStyle : null}>
                {this.props.todo.title}
            </span>
        </li>;
    }
}

export default TodoItem;