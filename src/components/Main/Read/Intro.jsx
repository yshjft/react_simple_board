import React, {Component} from 'react';
import store from "../../../store";
import "./Read.css";

class Intro extends Component{
    constructor(props){
        super(props);
        this.state={
            introTitle : store.getState().intro.title,
            introWriter : store.getState().intro.writer,
            introDate : store.getState().intro.date,
            introSubTitle : store.getState().intro.subTitle,
            introImgSrc : store.getState().intro.imgSrc,
        }
    }
    render(){
        return(
            <div className="Main">
                <div className="readTitle">{this.state.introTitle}</div>
                <div className="readInfo">
                    <div className="readWriter">{this.state.introWriter}</div>
                    <div className="readDate">{this.state.introDate}</div>
                </div>
                <div className="readSubTitle">{this.state.introSubTitle}</div>
                <img src={this.state.introImgSrc} alt="NOTHING" className="readImg"></img>
                <div className="readContent">
                    React와 관련하여 지금까지 배운 것들을 이용해 게시판 비슷한 것을 만들어보는 복습형 프로젝트입니다.
                    프로젝트는 프론트엔드 부분만 다룰 것입니다. 해당 페이지는 깃허브 README를 작성하듯이 프로젝트에 기능에 대하여
                    간략하게 정리할 것입니다.
                </div>
            </div>
        );
    }
}

export default Intro;