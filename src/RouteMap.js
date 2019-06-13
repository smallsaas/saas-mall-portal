import React from 'react'
import { Route,Redirect,Switch } from "react-router-dom";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Store from './pages/Store';

class RouteMap extends React.Component {
    render() {

      return (
        <main>
          <Switch>
              <Route path="/index" component={Home}/>
              <Route path="/productDetail" component={ProductDetail}/>
              <Route path="/store" component={Store}/>
              <Redirect to='/index' />
          </Switch>
        </main>
      )
    }
}

export default RouteMap
