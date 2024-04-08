import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";


export default function SimpleSlider({ productId }) {

    const [ imageCarousel, setImageCarousel ] = useState([]);


    async function fetchData() {
        const props = `https://api.mercadolibre.com/items/${productId}`
        const res = await fetch(props)
        const entry = await res.json();      
        
        setImageCarousel(entry.pictures);
    }


    useEffect(() => {
        fetchData();
        }, []);


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} >
       { imageCarousel.map((img) => (
        
          <div className="carousel-box" key={img.id}>
              <img className="carousel-img" src={img.url} alt={img.id} />
          </div>
       ))}
      </Slider>
    );
  }
