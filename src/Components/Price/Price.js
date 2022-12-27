import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Price.css"
import Picture7 from "./../../Images/1.jpeg"
import Picture8 from "./../../Images/2.jpeg"
import Picture9 from "./../../Images/3.jpeg"
import Picture10 from "./../../Images/4.jpeg"
import Picture11 from "./../../Images/5.jpeg"
import Picture12 from "./../../Images/6.jpeg"
import Picture13 from "./../../Images/7.jpeg"
import Picture14 from "./../../Images/8.jpeg"
import Picture15 from "./../../Images/6.jpeg"
export default function Price() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  return (
    <div className='div1'>
    <Slider {...settings}>
      
      <div>
       <img  src={Picture7} width="400px" height="250px"/>
        <h1>EGP 27.5</h1>              
      </div>
      <div>
        <img src={Picture8} width="400px" height="250px"/>
        <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src={Picture9} width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src={Picture10} width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src={Picture11} width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src={Picture12} width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src={Picture13} width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src={Picture14} width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src={Picture15} width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
    </Slider>
   </div>
  );
}