import React from 'react';

// Class-Based Component
class TodoItem extends React.Component {
    render() {
        return <li>
            <input 
            type="checkbox"
            checked={this.props.todo.completed} 
            onChange={() => console.log('click')}
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