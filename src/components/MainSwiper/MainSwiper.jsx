import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MainSwiper.scss";

const MainSwiper = () => {
  return (
    <Swiper
      className="main__swiper"
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
      effect
      speed={800}
      grabCursor
      loop
      pagination={true}
    >
      <SwiperSlide className="main__slide">
        <img className="slide__img" src="/media/swiper_img.png" alt="" />
        <div className="slide__content">
          <h1 className="slide__name">Разработано 2000+ приложений</h1>
          <p className="slide__description">
            Для вашего удобства мы разработали множество приложений для вашего
            бизнеса и команды, которые доступны в любое время суток
          </p>
          <button className="slide__button">Присоединяйтесь</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="main__slide">
        <img className="slide__img" src="/media/swiper_img.png" alt="" />
        <div className="slide__content">
          <h1 className="slide__name">Разработано 2000+ приложений</h1>
          <p className="slide__description">
            Для вашего удобства мы разработали множество приложений для вашего
            бизнеса и команды, которые доступны в любое время суток
          </p>
          <button className="slide__button">Присоединяйтесь</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="main__slide">
        <img className="slide__img" src="/media/swiper_img.png" alt="" />
        <div className="slide__content">
          <h1 className="slide__name">Разработано 2000+ приложений</h1>
          <p className="slide__description">
            Для вашего удобства мы разработали множество приложений для вашего
            бизнеса и команды, которые доступны в любое время суток
          </p>
          <button className="slide__button">Присоединяйтесь</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSwiper;
