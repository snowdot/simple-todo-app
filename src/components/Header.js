import React, { Component } from 'react';

class Header extends Component {
    componentDidUpdate(prevProps, prevState) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var color = `rgb(${x},${y},${z})`;
      
        if (prevProps.headerSpan !== this.props.headerSpan) {
          document.getElementById('inH1').style.color = color;
        }
    };
    render() {
        const headerStyle = {
            paddingBottom: '20px',
            lineHeight: '2em',
        };
        return (
            <header >
                <h1 id="inH1" style={headerStyle}>
                    Simple Todo App
                </h1>
                <p>Please add to-dos item(s) through the input field</p>
            </header>
        );
    }
}

export default Header;