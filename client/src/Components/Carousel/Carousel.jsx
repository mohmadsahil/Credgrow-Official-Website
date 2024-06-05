import React from 'react'
import "./Carousel.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };


  return (
    <div>
        <div className='carouselText'>
            <h1>The Best Offers From India’s Most Trusted Banks</h1>
        </div>

        <div className='mainCarouseldiv'>
            <div className='mainCarousel'>
                <Slider {...settings}>
                {carouselImg.map((data)=>(
                    <img className='mainCarouselImg' src={data.img} alt="" srcset="" />
                ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}


    const carouselImg= [
        {img:"/Images/SBI Bank.png"},
        {img:"/Images/AXIS Bank.png"},
        {img:"/Images/HDFC Bank.png"},
        {img:"/Images/IDFC Bank.png"},
        {img:"/Images/Kotak Bank.png"}
    ]
