import React from 'react';
import Header from './components/Header/Header';
import Board from './components/Main/Board/Board';
import Write from './components/Main/Write/Write';
import Footer from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/'><Board></Board></Route>
        <Route exact path='/write'><Write></Write></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}
export default App;
