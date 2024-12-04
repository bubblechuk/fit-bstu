import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./main.module.css";
import "../../fonts/bebasneue.css";
import arrow_left from "./left.svg";
import arrow_right from "./right.svg";
import React from "react";
import { useRef } from "react";
export const MySlider = () => {
  const slider = useRef<Slider | null>(null);
  const slides = [
    {
      id: 1,
      title: "ФИТ БГТУ",
      content: (
        <div className={styles.deco}>
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
      image: "https://i.imgur.com/olIk0jP.jpeg",
    },
    {
      id: 2,
      title: "Лучшие студенты",
      content: "Только у нас!",
      image:
        "https://neutrongroup.cachefly.net/fasttrak.mvc/content/v2/themes/tdbank/img/students.jpg",
    },
    {
      id: 3,
      title: "Поступи в БГТУ",
      content: "Лучший выбор!",
      image: "https://i.imgur.com/olIk0jP.jpeg",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 7000,
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