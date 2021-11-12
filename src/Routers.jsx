import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Favourite from './pages/Favourite/Favourite'
import Home from './pages/Home/Home'
const Routers = () => {
    return (
        <Switch>
               <Route exact path="/" component={Home}/>   
               <Route path="/favourite" component={Favourite}/>  
        </Switch> 
    )
}
export default Routers;
