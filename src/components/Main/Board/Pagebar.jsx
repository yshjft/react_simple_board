import React, {useState} from 'react';
import store from  '../../../store';
import './Pagebar.css';

function Pagebar(){
    let [length]=useState(store.getState().list.length)
    let btnNums=length/4;
    let btns=[];
    for(let i=0; i<btnNums; i++){
        btns.push(i+1);
    }

    let _btns=btns.map((list, index)=>(
        <button key={index} className="pageBtn">{list}</button>
    ));


    return(
        <div className="pageBtns">
            {_btns}
        </div>
    );
}

export default Pagebar;