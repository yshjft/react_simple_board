import React from 'react';
import store from '../../store';
import './modal.css';

function Edit(props){
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
                    let pwd=document.getElementById("modalPwd").value;
                    if(pwd === props.pwd){
                        alert('ok');
                        document.getElementById("modalPwd").value=null;
                        document.querySelector(".wrongPwd").style.visibility='hidden';
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