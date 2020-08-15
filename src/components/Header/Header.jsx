import React from 'react';
import './Header.css';

function Header(){
    return(
        <div className="header">
            <div className="headerName">
                SIMPLE BOARD
            </div>
            <div className="headerNav">
                <a href="/" className='nav'>MAIN</a>
                <a href="/" className='nav'>WRITE</a>
            </div>
        </div>
    );
}

export default Header;