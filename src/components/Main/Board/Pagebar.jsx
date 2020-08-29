import React, {Component} from 'react';
import store from  '../../../store';
import './Pagebar.css';

class Pagebar extends Component{
    constructor(props){
        super(props);
        this.state={
            length : store.getState().list.length,
            currentPage : 1,
        }
        store.subscribe(function(){
            this.setState({length : store.getState().list.length});
            this.setState({currentPage : store.getState().currentPage});
        }.bind(this));
    }
    render(){
        let btnNums=this.state.length/4;
        let btns=[];
        for(let i=0; i<btnNums; i++){
            btns.push(i+1);
        }

        let _btns=btns.map((number, index)=>{

            if(this.state.currentPage === number){
               return <button key={index} className="selected" onClick={function(e){
                    store.dispatch({type : "CURRENT_PAGE", currentPage : number});
                }}>{number}</button>
            }else{
                return <button key={index} className="pageBtn" onClick={function(e){
                    store.dispatch({type : "CURRENT_PAGE", currentPage : number});
                }}>{number}</button>
            }
        });

        return(
            <div className="pageBtns">
                {_btns}
            </div>
        );
    }
}


export default Pagebar;