import React from 'react';
import Header from "./header";
import Courses from "./courses";
import Onlineteachers from './onlineteachers/onlineteachers';


export default function Home() {
    return (
        <div className="home">
           <Header />
           <h2>Online teachers</h2>
           <Onlineteachers />
           <h2>Our courses</h2>
           <Courses />
        </div>
    )
}
