import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import List from "./List";
import Pagebar from "./Pagebar";
import store from "../../../store";

import './Board.css';

class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            intro : this.props.intro,
            list : this.props.list,
            currentPage : 1,
        }
        store.subscribe(function(){
            this.setState({currentPage : store.getState().currentPage});
        }.bind(this));
    }
    render(){
        let lists=this.state.list;
        let index = this.state.currentPage -1;
        let selectedLists=lists.slice(index*4, 4*(index+1));

        let listComponents=selectedLists.map((list, index)=>(
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
                {listComponents}
               <Pagebar></Pagebar>
            </div>
        );
    }
}

export default Board;