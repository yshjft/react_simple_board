import React, {Component} from 'react';

import "./Intro.css";

class Intro extends Component{
    render(){
        return(
            <div className="Main">
                <div className="readTitle">INTRO</div>
                <div className="readDate">2020.8.17</div>
                <div className="readSubTitle">SIMPLE BOARD에 대한 간단한 설명입니다.</div>
                <img src="/images/intro.png" className="readImg"></img>
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