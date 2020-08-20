import React, {Component} from 'react';
import Header from './components/Header/Header';
import Board from './components/Main/Containers/Board'; 
import Write from './components/Main/Write/Write';
import Intro from './components/Main/Read/Intro';
import Read from './components/Main/Read/Read';
import Footer from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom';
import store from './store';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedList : 0,
      contents : store.getState().list,
    }
    store.subscribe(function(){
      this.setState({selectedList : store.getState().selectedList});
      this.setState({contents : store.getState().list})
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
    </div>
    );
  }
}
export default App;
