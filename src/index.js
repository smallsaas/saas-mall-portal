import 'babel-polyfill'; //support IE
import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './RouteMap';
import * as serviceWorker from './serviceWorker';
import { HashRouter,BrowserRouter } from 'react-router-dom';

class Routers extends React.Component {

  render() {
      return (
          <BrowserRouter>
            <RouteMap />
          </BrowserRouter>
      )
  }

  }

  ReactDOM.render(
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
