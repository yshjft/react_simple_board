import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import store from "../../../store";
import "./Write.css";

class Write extends Component{
    constructor(props){
        super(props);
        this.state={
            year : new Date().getFullYear(),
            month : new Date().getMonth()+1,
            date : new Date().getDate(),
        };
        this.submitClick=this.submitClick.bind(this);
    }
    submitClick(e){
        e.preventDefault();
        store.dispatch({
            type : "EDIT_LASTID",
            lastId : store.getState().lastId+1,
        });

        store.dispatch({
            type: "WRITE",
            id : store.getState().lastId,
            title : e.target.title.value,
            writer : e.target.writer.value,
            date : e.target.date.value,
            subTitle : e.target.subTitle.value,
            write : e.target.write.value,
            password : e.target.password.value,
        });
        this.props.history.push('/'); //redirection
    }
    render(){
        return(
            <div className="Main">
                <form id="writeForm" className="writeForm" onSubmit={this.submitClick}>
                    <div className="form">
                        <input type="txt" placeholder="Title" className="input title" name="title" autoFocus required></input>
                    </div>
                    <div className="form">
                        <input type="txt" placeholder="Subtitle" className="input subTitle" name="subTitle" required></input>
                    </div>
                    <div className="form">
                        <input type="txt" placeholder="Writer" className="input writer" name="writer" required></input>
                    </div>
                    <div className="form">
                        <input value={this.state.year+"."+this.state.month+"."+this.state.date} className="input date" name="date" readOnly></input>
                    </div>
                    <div className="form">
                        <textarea placeholder="write something" className="write" name="write" required></textarea>
                    </div>
                    <div className="form">
                        <input type="password" placeholder="password for Edit or Delete"className="input password" name="password" required></input>
                    </div>
                    <div className="form">
                        <input type="submit" value="SUBMIT" className="submitBtn"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Write); //withRouter