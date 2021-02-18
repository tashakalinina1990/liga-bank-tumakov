import React from "react";
import { Link } from "react-router-dom";
import "./promo.scss";

const Promo = () => (
  <section className="promo">
    <div className="promo__wrap">
      <p className="promo__title">Лига Банк</p>
      <p className="promo__description">Кредиты на любой случай</p>
      <Link className="promo__link" to="#">
        Рассчитать кредит
      </Link>
    </div>
  </section>
);

export default Promo;
