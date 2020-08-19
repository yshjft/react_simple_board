import React from 'react';
import {NavLink} from 'react-router-dom';

import "./List.css";

function List(){
    return(
        <div className="list">
            <div className="listTitle">example title</div>
            <div className="listInfo">
                <div className="listWriter">yshjft</div>
                <div className="listDate">2020.X.XX</div>
            </div>
            <div className="listSubtitle">example 입니다</div>
        </div>
    )
}

export default List