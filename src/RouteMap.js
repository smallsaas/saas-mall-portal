import React from 'react'
import { Route,Redirect,Switch } from "react-router-dom";
import  App from './App';
import Home from './components/Home';

class RouteMap extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/index" component={App}/>
                    <Route path="/home" component={Home}/>
                    <Redirect to='/index' />
                </Switch>
            </main>
        )
    }
}
export default RouteMap
