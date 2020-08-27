import React , {useState}from 'react';
import {useHistory} from 'react-router-dom';
import store from '../../store';
import './modal.css'

function Delete(){
    let [lastId]=useState(store.getState().lastId);
    let [selectedList]=useState(store.getState().selectedList);
    // let [pwd]=useState(store.getState().list[store.getState().selectedList].password);
    let history=useHistory();
    return(
        <div>
            <div className="closeBtnArea" >``
                <button className="closeBtn" onClick={function(){
                    store.dispatch({
                        type : "MODAL_IS_OPEN",
                        modalIsOpen : false,
                    })
                }}>X</button>
            </div>
            <div className="modalMain">
                <div className="modalInfo">REALLY?</div>
                <div className="modalInfo">ENTER PASSWORD</div>
                <input type="password" id="modalPwd" className="modalPwd"></input>
                <div className="wrongPwd">WRONG PASSWORD</div>
            </div> 
            <div className="btnArea">
                <button className="btn" onClick={function(){
                    // pwd를 state에 저장하지 않는 이유
                    /*
                    delete 실행 이후 redux의 editOrDelete 값은 DELETE로 유지된다.
                    문제는 모달 컴포넌트를 렌더링할 때 조건문에 의해서 DELETE 컴포넌트가 렌더링되는데 이 때 selectedList로 인하여 문제가 발생한다.
                    */
                    let pwd=store.getState().list[store.getState().selectedList].password
                    let _pwd=document.getElementById("modalPwd").value;
                    if(_pwd === pwd){
                        document.getElementById("modalPwd").value=null;
                        document.querySelector(".wrongPwd").style.visibility='hidden';
                        store.dispatch({
                            type : "MODAL_IS_OPEN",
                            modalIsOpen : false,
                        });
                        store.dispatch({
                            type: "DELETE",
                            lastId : lastId-1,
                            selectedList : selectedList,
                        })
                        history.push('/');
                    }else{
                        document.getElementById("modalPwd").value=null;
                        document.querySelector(".wrongPwd").style.visibility='visible';
                    }
                }}>CONFIRM</button>
            </div>
        </div>
    )
}

export default Delete;