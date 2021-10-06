import React from 'react';
import Home from './home';
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";
import Discover from './discover';
import Categories from './categories';
import Courses from './courses';
import logo from "./../images/logo.png"

export default function sidebar() {
    return (
        <div className="sidebar">
            <img src={logo} className="img" alt="logo" />
            <div className="nav">
              ggggggg
            </div>
       </div>      
    );
}
