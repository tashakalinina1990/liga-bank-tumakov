import React from "react";
import "./social.scss";

const Social = () => (
  <ul className="social">
    <li className="social__item">
      <a
        className="social__link social__link--facebook"
        href="http://facabook.com"
      >
        <span className="visually-hidden">Фейсбук</span>
      </a>
    </li>
    <li className="social__item">
      <a
        className="social__link social__link--instagram"
        href="http://instagram.com"
      >
        <span className="visually-hidden">Инстаграм</span>
      </a>
    </li>
    <li className="social__item">
      <a
        className="social__link social__link--twitter"
        href="http://twitter.com"
      >
        <span className="visually-hidden">Твиттер</span>
      </a>
    </li>
    <li className="social__item">
      <a
        className="social__link social__link--youtube"
        href="http://youtube.com"
      >
        <span className="visually-hidden">Ютьб</span>
      </a>
    </li>
  </ul>
);

export default Social;
