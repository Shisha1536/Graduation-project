import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../public/css/blockslider.css'

export default function BlockSlider() {
    const settings = {
      dots: true,
      slidesToShow: 3,
    };
    return (
      <div className="image-slider-container">
        <Slider {...settings}>
            <div className='block-slide'>
                <img src={process.env.PUBLIC_URL + '/iconWatch.png'} alt="icon"/>
                <p>Высокая и оперативная скорость обработки заявки</p>
            </div>
            <div className='block-slide'>
                <img src={process.env.PUBLIC_URL + '/iconMagnifier.png'} alt="icon"/>
                <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
            </div>
            <div className='block-slide'>
                <img src={process.env.PUBLIC_URL + '/iconShield.png'} alt="icon"/>
                <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
            </div>
        </Slider>
      </div>
    );
  }