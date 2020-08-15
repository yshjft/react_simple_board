import React, {Component} from 'react';
import './Main.css';

class Main extends Component{
    render(){
        return(
            <div className="Main">
                <div className="tmp">
                    <div className="tmpTitle">EXAMPLE</div>
                    <div className="tmpDesc">간단한 설명입니다.</div>
                </div>
                <div className="tmp">
                    <div className="tmpTitle">EXAMPLE2</div>
                    <div className="tmpDesc">간단한 설명입니다.</div>
                    <img src="/images/example.jpg" className="img"></img>
                </div>
            </div>
        );
    }
}

export default Main;