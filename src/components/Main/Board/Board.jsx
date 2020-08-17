import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './Board.css';

class Board extends Component{
    render(){
        return(
            <div className="Main">
                <NavLink exact to="/intro" className="link">
                    <div className="intro">
                        <div className="introTitle">INTRO</div>
                        <div className="introDesc">프로젝트에 대한 간단한 설명입니다.</div>
                        <img src="/images/intro.png" className="img"></img>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default Board;