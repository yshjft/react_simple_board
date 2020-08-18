import React, {Component} from "react";

import "./Write.css";

class Write extends Component{
    constructor(props){
        super(props);
        this.state={
            year : new Date().getFullYear(),
            month : new Date().getMonth()+1,
            date : new Date().getDate(),
        };
    }
    render(){
        return(
            <div className="Main">
                <form id="writeForm" className="writeForm">
                    <div className="form">
                        <input type="txt" placeholder="Title" className="input title" required></input>
                    </div>
                    <div className="form">
                        <input type="txt" placeholder="Subtitle" className="input subTitle"></input>
                    </div>
                    <div className="form">
                        <input type="txt" placeholder="Writer" className="input writer" required></input>
                    </div>
                    <div className="form">
                        <input value={this.state.year+"."+this.state.month+"."+this.state.date} className="input date" readOnly></input>
                    </div>
                    <div className="form">
                        <textarea placeholder="write something" className="write" required></textarea>
                    </div>
                    <div className="form">
                        <input type="password" placeholder="password for Edit or Delete" className="input password"></input>
                    </div>
                    <div className="form">
                        <input type="submit" value="SUBMIT" className="submitBtn"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Write;