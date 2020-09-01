import React from 'react';

// Class-Based Component
class TodoItem extends React.Component {
    render() {
        return <li>
            <input 
            type="checkbox"
            checked={this.props.todo.completed} 
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
            />
            {this.props.todo.title}
        </li>;
    }
}

// Function Component
// function TodoItem(props) {
//     return <li>{props.todo.title}</li>;
// }


export default TodoItem;