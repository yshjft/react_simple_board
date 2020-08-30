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
                <img src={this.state.introImgSrc} alt="NO IMG" className="readImg"></img>
                <div className="readContent">
                    <div className="topic">SIMPLE BOARD란?</div>
                    <br/>
                    React와 관련하여 지금까지 배운 것들을 이용해 게시판 비슷한 것을 만들어보는 복습형 프로젝트입니다.
                    이 프로젝트는 프론트엔드 부분만 다룹니다. 지금까지 배운 React, React router, Redux를 이용하였습니다.
                    INTRO에서는 SIMPLE BOARD가 가진 기능과 아쉬운 점을 간단히 정리할 것입니다.
                    <br/>
                    <br/>
                    <br/>
                    <div className="topic">MAIN PAGE & READ</div>
                    <br/>
                    <div className="gifArea">
                        <img src="/images/main_page.gif" alt="NO IMG" className="readGif"></img>
                    </div>
                    <br/>
                    SIMPLE BOARD의 MAIN PAGE입니다. 작성된 글들의 목록을 볼 수 있습니다.
                    <br/>
                    <br/>
                    <br/>
                    <div className="topic">WRITE</div>
                    <br/>
                    <div className="gifArea">
                        <img src="/images/write.gif" alt="NO IMG" className="readGif"></img>
                    </div>
                    <br/>
                    글을 작성하는 부분입니다. 이후 수정이나 삭제를 위해 password를 작성하도록 하였습니다.
                    <br/>
                    <br/>
                    <br/>
                    <div className="topic">UPDATE</div>
                    <br/>
                    <div className="gifArea">
                        <img src="/images/update.gif" alt="NO IMG" className="readGif"></img>
                    </div>
                    <br/>
                    작성한 글을 수정하는 부분입니다. 뛰어진 모달을 통해 password를 입력하고 내용을 수정합니다.
                    <br/>
                    <br/>
                    <br/>
                    <div className="topic">DELETE</div>
                    <br/>
                    <div className="gifArea">
                        <img src="/images/delete.gif" alt="NO IMG" className="readGif"></img>
                    </div>
                    <br/>
                    작성한 글을 삭제하는 부분입니다. 뛰어진 모달을 통해 password를 입력하고 내용을 수정합니다.
                    <br/>
                    <br/>
                    <br/>
                    <div className="topic">PAGINATION</div>
                    <br/>
                    <div className="gifArea">
                        <img src="/images/pagination.gif" alt="NO IMG" className="readGif"></img>
                    </div>
                    <br/>
                    글을 목록이 너무 많을 경우를 위해 pagination 기능을 제공합니다.
                    <br/>
                    <br/>
                    <br/>
                    <div className="topic">아쉬운 점</div>
                    <br/>
                    함수형 컴포넌트를 제대로 사용하지 못햇다는 점이 아쉬웠다. 특히 아직까지로 hook에 대한 이해도가 낮아 공부가 더 필요할 것 같다. pagination이나 글 작성, 글 수정 등에 redux를 사용하여 새로고침할 경우 값이 유지 되지 않는다는 것이 조금 안타깝다.
                    또한 password를 필요로 하는 글 수정페이지를 password 없이 접근하는 것을 막지 못했다는 것 또한 아쉽다.
                </div>

            </div>
        );
    }
}

export default Intro;