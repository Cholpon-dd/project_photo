import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kart1 from '../../assets/images/Colors.jpg'
import kart2 from '../../assets/images/maki.jpg'
import kart3 from '../../assets/images/Janny.jpg'
import kart4 from '../../assets/images/emily.jpg'
import kart5 from '../../assets/images/Lemonade.jpg'
import kart6 from '../../assets/images/Baby-Alisa.jpg'
import './SimpleSlider.css'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };
  return (
    <Slider {...settings}>
      <div>
          <div className="slide">
            <img className="slide-img" 
            src={kart4} 
            />
          </div>
      </div>
      <div>
        <div className="slide">
          <img className="slide-img"  src={kart6} 
          />
        </div>
      </div>
      <div>
        <div className="slide">
          <img className="slide-img"  src={kart2} 
          />
        </div>
      </div>
      <div>
        <div className="slide">
          <img className="slide-img"  src={kart5} />
        </div>
      </div>
      <div>
        <div className="slide">
          <img className="slide-img"  src={kart3} />
        </div>
      </div>
      <div>
        <div className="slide">
          <img className="slide-img"  src={kart1} />
        </div>
      </div>
    </Slider>
  );
}