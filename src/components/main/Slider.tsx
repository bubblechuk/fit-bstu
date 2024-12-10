import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./main.module.css";
import "../../fonts/bebasneue.css";
import arrow_left from "./left.svg";
import arrow_right from "./right.svg";
import React from "react";
import { useRef } from "react";
import Slider1 from './slider.jpg'
import Slider2 from './slider2.jpg'
import Slider3 from './slider3.jpg'
export const MySlider = () => {
  const slider = useRef<Slider | null>(null);
  const slides = [
    {
      id: 1,
      content: (
        <div className={styles.deco} style={{backgroundImage: `url(${Slider1})`}}>
          <div className={styles.line}>
            <div className={styles.title}>
              <span className={styles.name}>
                Факультет
                <br />
                информационных
                <br />
                технологий
              </span>
              <br />
              <span className={`${styles.title} ${styles.below}`}>
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className={styles.deco} style={{backgroundImage: `url(${Slider2})`, backgroundPositionX: "0"}}>

        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className={styles.deco} style={{backgroundImage: `url(${Slider3})`, backgroundPositionX: "0", backgroundPositionY: "-400px"}}>

        </div>
      ),
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider ref={slider} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            {slide.content}
          </div>
        ))}
      </Slider>
      <div className={`${styles.arrow} ${styles.left}`} onClick={() => {slider?.current?.slickPrev()}}>
        <img src={arrow_left} alt="Previous" />
      </div>
      <div className={`${styles.arrow} ${styles.right}`} onClick={() => {slider?.current?.slickNext()}}>
        <img src={arrow_right} alt="Next" />
      </div>
    </div>
  );
};