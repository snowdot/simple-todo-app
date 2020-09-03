import React, { useState } from 'react';

const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title: ''
    });

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodoProps(inputText.title);
        setInputText({
            title: ''
        });
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input 
                type="text"
                name="title"
                placeholder="add todo..."
                value={inputText.title}
                onChange={onChange} className="input-text"
            />
            <input type="submit" value="Submit" className="input-submit" />
        </form>
    )
}

export default InputTodo;

// import React, { Component } from 'react';

// class InputTodo extends Component {
//     state = {
//         title: ''
//     };
//     onChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     };
//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.addTodoProps(this.state.title);
//         this.setState({
//             title: ''
//         });
//     };
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className="form-container">
//                 <input 
//                     type="text"
//                     name="title"
//                     placeholder="add todo..."
//                     value={this.state.title}
//                     onChange={this.onChange} className="input-text"
//                 />
//                 <input type="submit" value="Submit" className="input-submit" />
//             </form>
//         )
//     }
// }

// export default InputTodo;