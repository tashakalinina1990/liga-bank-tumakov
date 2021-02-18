import React from "react";
import "./contacts.scss";

const Contacts = () => (
  <ul className="contacts">
    <li className="contacts__item">
      <a className="contacts__phone contacts__phone--mobile" href="tel:*0904">
        *0904
      </a>
      <p className="contacts__description">
        Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
      </p>
    </li>
    <li className="contacts__item">
      <a
        className="contacts__phone contacts__phone--free-phone"
        href="tel:88001112233"
      >
        8 800 111 22 33
      </a>
      <p className="contacts__description">
        Бесплатный для всех городов России
      </p>
    </li>
  </ul>
);

export default Contacts;
