import React, {Component} from 'react';
import Header from './components/Header/Header';
import Board from './components/Main/Containers/Board'; 
import Write from './components/Main/Write/Write';
import Intro from './components/Main/Read/Intro';
import Read from './components/Main/Read/Read';
import Footer from './components/Footer/Footer';
import Modal from 'react-modal';
import Edit from './components/Modal/Edit';
import Delete from './components/Modal/Delete';
import {Switch, Route} from 'react-router-dom';
import store from './store';
import './App.css';

Modal.setAppElement('#root');
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedList : 0,
      contents : store.getState().list,
      modalIsOpen : false,
    }
    store.subscribe(function(){
      this.setState({selectedList : store.getState().selectedList});
      this.setState({contents : store.getState().list})
      this.setState({modalIsOpen : store.getState().modalIsOpen})
    }.bind(this));
  }
  render(){
    let editOrDelete=store.getState().editOrDelete;
    let modalComp;
    if(editOrDelete === "EDIT"){
      modalComp=<Edit pwd={this.state.contents[this.state.selectedList].password}></Edit>
    }else if(editOrDelete === "DELETE"){
      modalComp=<Delete pwd={this.state.contents[this.state.selectedList].password}></Delete>
    }

    return(
      <div className="App">
        <Header></Header>
        <Switch className="Main">
          <Route exact path='/' component={Board}></Route>
          <Route exact path='/write' component={Write}></Route>
          <Route exact path='/intro' component={Intro}></Route>
          <Route exact path={'/'+this.state.selectedList}>
            <Read content={this.state.contents[this.state.selectedList]}></Read>
          </Route>
        </Switch>
        <Footer></Footer>
        <Modal 
          isOpen={this.state.modalIsOpen}
          style={{
            content :{
              top: '30%',
              left : '15%',
              right : '15%',
              bottom : '30%',
              border : '1px solid silver',
              borderRadius : '30px',
            }
          }}>
          {modalComp}
        </Modal>
      </div>
    );
  }
}
export default App;
