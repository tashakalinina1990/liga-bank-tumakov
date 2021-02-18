import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const { navigationType } = props;

  return (
    <ul className={`${navigationType}-navigation`}>
      <li className={`${navigationType}-navigation__item`}>
        <Link className={`${navigationType}-navigation__link`} to="#">
          Услуги
        </Link>
      </li>
      <li className={`${navigationType}-navigation__item`}>
        <Link className={`${navigationType}-navigation__link`} to="#">
          Рассчитать кредит
        </Link>
      </li>
      <li
        className={`${navigationType}-navigation__item ${navigationType}-navigation__item--current`}
      >
        <Link
          className={`${navigationType}-navigation__link ${navigationType}-navigation__link--current`}
          to="#"
        >
          Конвертер валют
        </Link>
      </li>
      <li className={`${navigationType}-navigation__item`}>
        <Link className={`${navigationType}-navigation__link`} to="#">
          Контакты
        </Link>
      </li>
      <li className={`${navigationType}-navigation__item`}>
        <Link className={`${navigationType}-navigation__link`} to="#">
          Задать вопрос
        </Link>
      </li>
    </ul>
  );
};

Navigation.propTypes = {
  navigationType: PropTypes.string.isRequired,
};

export default Navigation;
