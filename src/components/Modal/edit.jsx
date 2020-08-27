import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import store from '../../store';
import './modal.css';

function Edit(){
    let [pwd]=useState(store.getState().list[store.getState().selectedList].password);
    let history = useHistory();
    return(
        <div>
            <div className="closeBtnArea" >
                <button className="closeBtn" onClick={function(){
                    store.dispatch({
                        type : "MODAL_IS_OPEN",
                        modalIsOpen : false,
                    })
                }}>X</button>
            </div>
            <div className="modalMain">
                <div className="modalInfo">ENTER PASSWORD</div>
                <input type="password" id="modalPwd" className="modalPwd"></input>
                <div className="wrongPwd">WRONG PASSWORD</div>
            </div>
            <div className="btnArea">
                <button className="btn" onClick={function(){
                    let _pwd=document.getElementById("modalPwd").value;
                    if(_pwd === pwd){
                        document.getElementById("modalPwd").value=null;
                        document.querySelector(".wrongPwd").style.visibility='hidden';
                        store.dispatch({
                            type : "MODAL_IS_OPEN",
                            modalIsOpen : false,
                        });
                        history.push('/edit');
                    }else{
                        document.getElementById("modalPwd").value=null;
                        document.querySelector(".wrongPwd").style.visibility='visible';
                    }
                }}>SUBMIT</button>
            </div>
        </div>
    );

}

export default Edit;