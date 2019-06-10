import React from 'react';
import { Route } from 'react-router-dom';
import ShowCommonList from './components/ShowCommonList'

function App() {

  return (
    <div>
      <Route path="/index" component={ ShowCommonList }/>
    </div>
  );
}

export default App;
