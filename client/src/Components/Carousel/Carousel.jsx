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
                    <a className='clickableCarouselImg' href={data.url}>
                        <img className='mainCarouselImg' src={data.img} alt="" srcset="" />
                    </a>
                ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}


const carouselImg = [
    { img: "/Images/SBI Bank.png", url: "https://www.sbi.co.in" },
    { img: "/Images/AXIS Bank.png", url: "https://www.axisbank.com" },
    { img: "/Images/HDFC Bank.png", url: "https://www.hdfcbank.com" },
    { img: "/Images/IDFC Bank.png", url: "https://www.idfcfirstbank.com" },
    { img: "/Images/Kotak Bank.png", url: "https://www.kotak.com" }
];
