import React from "react";
import "./Main.scss";
import "../MainSwiper/MainSwiper.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MainSwiper from "../MainSwiper/MainSwiper";
import Purposes from "../Purposes/Purposes";
import About from "../About/About";

const Main = () => {
  return (
    <main className="main">
      <MainSwiper />
      <Purposes />
      <About />
    </main>
  );
};

export default Main;
