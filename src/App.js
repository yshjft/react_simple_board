import React from 'react';
import Header from './components/Header/Header';
import Board from './components/Main/Containers/Board'; 
import Write from './components/Main/Write/Write';
import Intro from './components/Main/Read/Intro';
import Footer from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch className="Main">
        <Route exact path='/' component={Board}></Route>
        <Route exact path='/write' component={Write}></Route>
        <Route exact path='/intro' component={Intro}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}
export default App;
