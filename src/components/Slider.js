import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/style.css";
import "../css/slick.css";


function ImageSlider() {
    let settings = {
      
         speed: 100,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        
    }
    return (
        <Slider {...settings}>       
           <div class="banner banner-1">
             <img src="/img/banner01.jpg" alt="" />
             <div class="banner-caption text-center">
              
               <button class="primary-btn">
                 <a href="Shop.html">Shop Now</a>
               </button>
             </div>
           </div>
         
           <div class="banner banner-1">
             <img src="/img/banner02.jpg" alt="" />
             <div class="banner-caption">
               <button class="primary-btn">
                 <a href="Shop.html">Shop Now</a>
               </button>
             </div>
           </div>
         
           <div class="banner banner-1">
             <img src="/img/banner03.jpg" alt="" />
             <div class="banner-caption">
               <button class="primary-btn">
                 <a href="Shop.html">Shop Now</a>
               </button>
             </div>
           </div>
           <div class="banner banner-1">
             <img src="/img/banner_1.jpg" alt="" />
             <div class="banner-caption">
               <button class="primary-btn">
                 <a href="Shop.html">Shop Now</a>
               </button>
             </div>
           </div>
           <div class="banner banner-1">
             <img src="/img/banner_2.jpg" alt="" />
             <div class="banner-caption">
               <button class="primary-btn">
                 <a href="Shop.html">Shop Now</a>
               </button>
             </div>
           </div>
          
           
    </Slider>

       
    );
}

export default ImageSlider;
