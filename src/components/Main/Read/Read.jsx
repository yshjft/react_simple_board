import React from 'react';
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
        </div>
    )
}

export default Read;