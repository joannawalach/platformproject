import React from 'react';
import { FaReact, FaJava, FaHtml5, FaCss3Alt, 
    FaPython, FaAngular, FaVuejs } from "react-icons/fa";

export default function Categories() {
    return (
        <div className="categories">
            <div><FaReact className="icon" />
            <p>React JS</p></div>
            <div><FaJava className="icon" />
            <p>Java Script</p></div>
            <div><FaHtml5 className="icon" />
            <p>FaHtml5</p></div>
            <div><FaCss3Alt className="icon" />
            <p>FaCss3Alt</p></div>
            <div><FaPython className="icon" />
            <p>FaPython</p></div>
            <div><FaAngular className="icon" />
            <p>FaAngular</p></div>
            <div><FaVuejs className="icon" />
            <p>Vue JS</p></div>
        </div>
    )
}
