import React from 'react'
import {Route, Router, Switch} from 'react-router'
import Favourite from './pages/Favourite/Favourite'
import Home from './pages/Home/Home'
export const Routes = () => {
    return (
        <Router>
            <Switch>
               <Route exact path="/" component={Home}/>   
               <Route exact path="/favourite" component={Favourite}/>   
            </Switch>
        </Router>
    )
}
