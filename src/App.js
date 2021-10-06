import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Sidebar from "./components/sidebar";
import Discover from "./components/discover";
import Categories from "./components/categories";
import Courses from "./components/courses";
import './App.css';


function App() {
  return (
    <Router>
    <div className="app">
     <ul className="sidebar">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/discover">Discover</Link></li>
       <li><Link to="/categories">Categories</Link></li>
       <li><Link to="/courses">Courses</Link></li>
     </ul>
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
