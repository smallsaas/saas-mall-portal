import React from 'react'
import { Route,Redirect,Switch } from "react-router-dom";
import Home from './pages/Home'

class RouteMap extends React.Component {
    render() {

      return (
        <main>
          <Switch>
              <Route path="/index" component={Home}/>
              <Redirect to='/index' />
          </Switch>
        </main>
      )
    }
}

export default RouteMap
