import React from 'react';

// Class-Based Component
class TodoItem extends React.Component {
    render() {
        return <li>{this.props.todo.title}</li>;
    }
}

// Function Component
// function TodoItem(props) {
//     return <li>{props.todo.title}</li>;
// }


export default TodoItem;