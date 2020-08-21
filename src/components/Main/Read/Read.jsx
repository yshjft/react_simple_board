import React from 'react';
import store from '../../../store';
import "./Read.css";

function Read(props){
    return(
        <div className="Main">
            <div className="readTitle">{props.content.title}</div>
            <div className="readInfo">
                <div className="readWriter">{props.content.writer}</div>
                <div className="readDate">{props.content.date}</div>
            </div>
            <div className="readSubTitle">{props.content.subTitle}</div>
            <div className="readContent">
                {props.content.write}
            </div>
            <div className="readBtns">
                <button className="readBtn" onClick={function(){
                    store.dispatch({
                        type : "MODAL_IS_OPEN",
                        modalIsOpen : true,
                    });
                    store.dispatch({
                        type : "MODAL_TYPE",
                        editOrDelete : "EDIT"
                    })
                }}>EDIT</button>
                <button className="readBtn" onClick={function(){
                    store.dispatch({
                        type : "MODAL_IS_OPEN",
                        modalIsOpen : true,
                    });
                    store.dispatch({
                        type : "MODAL_TYPE",
                        editOrDelete : "DELETE"
                    })
                }}>DELETE</button>
            </div>
        </div>
    )
}

export default Read;