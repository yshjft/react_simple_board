import React from 'react';
import {NavLink} from 'react-router-dom';
import store from '../../../store';

import "./List.css";

function List(props){
    return(
        <NavLink exact to={props.list.path} className="link" onClick={function(){
            store.dispatch({type : "SELECTED_LIST", selectedList : props.list.id})
        }}>
            <div className="list">
                <div className="listTitle">{props.list.title}</div>
                <div className="listInfo">
                    <div className="listWriter">{props.list.writer}</div>
                    <div className="listDate">{props.list.date}</div>
                </div>
                <div className="listSubtitle">{props.list.subTitle}</div>            
            </div>
        </NavLink>
        
       
    )
}

export default List