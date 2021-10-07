import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Discover from "./components/discover";
import Categories from "./components/categories";
import Courses from "./components/courses";

import { FcHome, FcDownload, FcList, FcWorkflow } from 'react-icons/fc';
import logo from "./images/logo.png";
import './App.css';


function App() {
  return (
    <Router>
    <div className="app">
     <div className="right_bar">
     <img className="img" src={logo} alt="logo" />
     <ul className="sidebar_ul">
       <li><Link to="/"><FcHome />Home</Link></li>
       <li><Link to="/discover"><FcDownload />Discover</Link></li>
       <li><Link to="/categories"><FcList />Categories</Link></li>
       <li><Link to="/courses"><FcWorkflow />Courses</Link></li>
     </ul>
     </div>
     <Switch>
       <Route exact path='/' component={Home}></Route>
       <Route exact path='/discover' component={Discover}></Route>
       <Route exact path='/categories' component={Categories}></Route>
       <Route exact path='/courses' component={Courses}></Route>
     </Switch>
   </div>
</Router>
     
    
  );
}

export default App;
