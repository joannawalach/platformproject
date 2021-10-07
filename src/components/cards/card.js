import React from 'react';
import movie from './../../videos/movie1.mp4';

export default function Card() {
    return (
        <div className="card">
          <h1> Title</h1>  
          <video width="750" height="500" controls >
          <source src={movie} type="video/mp4"/>
          </video>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean a lectus sed purus iaculis aliquet vitae sit amet lacus. 
              Phasellus lobortis arcu id orci tempus, quis maximus metus efficitur. 
          </p>
          <a href="#" className="btn">Dodaj do koszyka</a>
        </div>
    )
}
