import React from 'react';
import Header from "./header";
import Courses from "./courses";


export default function Home() {
    return (
        <div className="home">
           <Header />
           <Courses />
        </div>
    )
}
