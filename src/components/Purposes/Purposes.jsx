import React, { useState } from "react";
import "./Purposes.scss";

const Purposes = () => {
  const purposeTitle = [
    "Для бизнеса",
    "Для колл-центров",
    "Облачные хранилища",
  ];
  const purposesValues = [
    "Создаем кастомизированные программы и сервисы\n" +
      "для развития управленческих команд в российских и\n" +
      "международных компаниях",
    "Помогаем руководителям и командам колл-центров создать полный цикл по поддержке клиентов и\n" +
      "организовать контроль качества",
    "Разрабатываем локальные защищенные\n" +
      "корпоративные хранилища, а также осуществляем\n" +
      "поддержку на протяжении всего времени\n" +
      "пользования",
  ];
  const [purpose, setPurpose] = useState(0);
  const onPurpose = (index) => setPurpose(index);
  return (
    <div className="purposes">
      <ul className="purposes__list">
        {purposeTitle.map((name, index) => (
          <li
            className={`purpose ${purpose === index ? "purpose_active" : ""}`}
            onClick={() => onPurpose(index)}
          >
            {name}
          </li>
        ))}
      </ul>
      <p className="purpose__description">{purposesValues[purpose]}"</p>
    </div>
  );
};

export default Purposes;
