import React, {Component} from 'react';
import Header from './components/Header/Header';
import Board from './components/Main/Containers/Board'; 
import Write from './components/Main/Write/Write';
import Intro from './components/Main/Read/Intro';
import Read from './components/Main/Read/Read';
import Footer from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom';
import store from './store';
import Modal from 'react-modal';
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
          // isOpen={this.state.modalIsOpen}
          isOpen={false}
          style={{
            content :{
              top: '30%',
              left : '15%',
              right : '15%',
              bottom : '30%',
            }
          }}>
          <button onClick={function(){
            store.dispatch({
              type : "MODAL_IS_OPEN",
              modalIsOpen : false,
            })
          }}>close</button>
        </Modal>
      </div>
    );
  }
}
export default App;
