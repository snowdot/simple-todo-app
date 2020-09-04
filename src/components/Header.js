import React, { useEffect, useRef } from 'react';

const Header = props => {
    const headerStyle = {
        paddingBottom: '20px',
        lineHeight: '2em',
    }

    const isInitialMount = useRef(true);

    useEffect(() => {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var color = `rgb(${x},${y},${z})`;
      
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            document.getElementById('inH1').style.color = color;
        }
    }, [props.headerSpan])

    return (
        <header >
            <h1 id="inH1" style={headerStyle}>
                Simple Todo App
            </h1>
            <p>Please add to-dos item(s) through the input field</p>
        </header>
    )
}

export default Header;