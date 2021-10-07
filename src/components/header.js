import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./header/login";
import Register from "./header/login";

export default function header() {
    return (
        <Router>
    <div className="header">
        <div>
     <ul className="header_ul">
       <li><Link to="/login">Log in</Link></li>
       <li><Link to="/register">Register</Link></li>
     </ul>
     </div>
     <Switch>
       <Route exact path='/login' component={Login}></Route>
       <Route exact path='/register' component={Register}></Route>
     </Switch>
   
   </div>
</Router>

    );
}
