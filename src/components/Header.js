import React from 'react';

const Header = () => {
    const headerStyle = {
        paddingBottom: '20px',
        lineHeight: '2em',
    }
    
    return (
        <header>
            <h1 style={headerStyle}>Simple Todo App</h1>
            <p>Please add to-dos item(s) through the input field</p>
        </header>
    );
}

export default Header;