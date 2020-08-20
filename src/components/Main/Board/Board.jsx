import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import List from "./List";

import './Board.css';

class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            intro : this.props.intro,
            list : this.props.list,
        }
    }
    render(){
        let lists=this.state.list;
        let _list=lists.map((list, index)=>(
            <List key={index} list={list}></List>
        ));

        return(
            <div className="Main">
                <NavLink exact to={this.state.intro.path} className="link">
                    <div className="intro">
                        <div className="introTitle">{this.state.intro.title}</div>
                        <div className="introInfo">
                            <div className="introWriter">{this.state.intro.writer}</div>
                            <div className="introDate">{this.state.intro.date}</div>
                        </div>
                        <div className="introSubtitle">{this.state.intro.subTitle}</div>
                        <img src={this.state.intro.imgSrc} alt="LOAD FAIL" className="introImg"></img>
                    </div>
                </NavLink>

                {_list}
               
            </div>
        );
    }
}

export default Board;