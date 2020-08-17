import React, {Component} from "react";

import "./Write.css";

class Write extends Component{
    render(){
        return(
            <div className="Main">
                <div className="writeForm">
                    <div className="form">
                        <input type="txt" placeholder="Title" className="input title" required autoFocus></input>
                    </div>
                    <div className="form">
                        <input type="txt" placeholder="Subtitle" className="input subTitle"></input>
                    </div>
                    <div className="form">
                        <input type="txt" placeholder="Writer" className="input writer" required></input>
                    </div>
                    <div className="form">
                        <input type="date" className="input date"></input>
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
                </div>
            </div>
        );
    }
}

export default Write;