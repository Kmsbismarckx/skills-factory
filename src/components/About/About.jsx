import React from "react";
import "./About.scss";

const About = () => {
  const aboutItems = [
    {
      id: 1,
      name: "Поддержка 24/7",
      description:
        "Вы можете положиться на нашу круглосуточную поддержку, которая решит любой вопрос в течении часа",
    },
    {
      id: 2,
      name: "Гарантия возврата",
      description:
        "Если вам не понравится сервис, мы вернем вам полную стоимость в течении 30-дневного периода",
    },
    {
      id: 3,
      name: "Удобство и простота",
      description:
        " Все наши сервисы и приложения интуитивно понятны для пользователей всех уровней",
    },
  ];
  return (
    <div className="about">
      <h1 className="about__name">Преимущества</h1>
      <div className="about__list">
        {aboutItems.map((item) => (
          <div className="about__item">
            <img
              className="about__img"
              src={`/media/about_img${item.id}.png`}
              alt=""
            />
            <h2 className="about__name">{item.name}</h2>
            <p className="about__description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
