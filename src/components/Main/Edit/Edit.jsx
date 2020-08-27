import React, {useState}  from 'react';
import {useHistory} from 'react-router-dom';
import store from '../../../store';

function EditPage(props){ // 컴포넌트는 무조건 대문자로 작성
    let history=useHistory();
    let [title, setTitle]=useState(props.content.title);
    let [subTitle, setSubTitle]=useState(props.content.subTitle);
    let [writer, setWriter]=useState(props.content.writer);
    let [year]=useState(new Date().getFullYear());
    let [month]=useState(new Date().getMonth()+1);
    let [date]=useState(new Date().getDate());
    let [write, setWrite]=useState(props.content.write);
    let [pwd, setPwd]=useState(props.content.password);

    return(
        <div className="Main">
            <form id="writeForm" className="writeForm" onSubmit={function(e){
                e.preventDefault();
                store.dispatch({
                    type: "EDIT",
                    id : props.id,
                    title : e.target.title.value,
                    writer : e.target.writer.value,
                    date : e.target.date.value,
                    subTitle : e.target.subTitle.value,
                    write : e.target.write.value,
                    password : e.target.password.value,
                });
                history.push('/');
            }}>
                <div className="form">
                    <input 
                        type="txt" 
                        value={title}
                        className="input title" name="title"
                        onChange={function(e){
                            setTitle(e.target.value);
                        }}
                        required>
                    </input>
                </div>
                <div className="form">
                    <input 
                        type="txt"
                        value={subTitle}
                        className="input subTitle" name="subTitle"
                        onChange={function(e){
                            setSubTitle(e.target.value);
                        }}
                        required>   
                    </input>
                </div>
                <div className="form">
                    <input 
                        type="txt" 
                        value={writer}
                        className="input writer" name="writer" 
                        onChange={function(e){
                            setWriter(e.target.value);
                        }}
                        required>
                    </input>
                </div>
                <div className="form">
                    <input 
                        value={"Modified "+year+"."+month+"."+date}
                        className="input date" name="date" readOnly>
                    </input>
                </div>
                <div className="form">
                    <textarea 
                        value={write}
                        className="write" name="write" 
                        onChange={function(e){
                            setWrite(e.target.value);
                        }}
                        required></textarea>
                </div>
                <div className="form">
                    <input 
                        type="password"
                        value={pwd}
                        className="input password" name="password"
                        onChange={function(e){
                            setPwd(e.target.value);
                        }}
                        required></input>
                </div>
                <div className="form">
                    <input type="submit" value="EDIT" className="submitBtn"></input>
                </div>
            </form>
        </div>
    )
}

export default EditPage;