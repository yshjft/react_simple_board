import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';
function Header(){
    return(
        <div className="header">
            <div className="headerName">
                SIMPLE BOARD
            </div>
            <div className="headerNav">
                <NavLink exact to='/' className="nav">MAIN</NavLink>
                <NavLink exact to='/write' className="nav">WRITE</NavLink>
            </div>
        </div>
    );
}

export default Header;