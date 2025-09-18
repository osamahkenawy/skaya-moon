import mainSliderData from "@/data/mainSliderData";
import useTranslation from "../../hooks/useTranslation";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSlider = () => {
  const { t } = useTranslation();
  
  // Create localized slider data
  const localizedSlides = [
    {
      id: 1,
      bg: mainSliderData[0].bg,
      subTitle: t('slider.slide1.subtitle', 'home'),
      title: t('slider.slide1.title', 'home'),
    },
    {
      id: 2,
      bg: mainSliderData[1].bg,
      subTitle: t('slider.slide2.subtitle', 'home'),
      title: t('slider.slide2.title', 'home'),
    },
    {
      id: 3,
      bg: mainSliderData[2].bg,
      subTitle: t('slider.slide3.subtitle', 'home'),
      title: t('slider.slide3.title', 'home'),
    },
  ];
  
  return (
    <section className="main-slider">
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {localizedSlides.map((slide) => (
            <SingleSlide key={slide.id} slide={slide} />
          ))}
        </div>
        <div className="main-slider-nav">
          <div
            id="main-slider__swiper-button-prev"
            className="main-slider-button-prev"
          >
            <span className="icon-right-arrow"></span>
          </div>
          <div
            id="main-slider__swiper-button-next"
            className="main-slider-button-next"
          >
            <span className="icon-right-arrow"></span>{" "}
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
