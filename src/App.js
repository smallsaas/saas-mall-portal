import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ShowCommonList from './components/ShowCommonList'

function App() {

  return (
    <div className="App">
      <Route path="/index" component={ ShowCommonList }/>
    </div>
  );
}

export default App;
