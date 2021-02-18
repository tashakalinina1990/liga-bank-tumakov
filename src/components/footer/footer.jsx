import React from "react";
import Logo from "../logo/logo";
import FooterNavigation from "../navigation/footer-navigation/footer-navigation";
import Contacts from "../contacts/contacts";
import Social from "../social/social";
import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrap wrapper">
      <section className="footer__copyright">
        <Logo />
        <p className="footer__copyright-description">
          150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
          России №1050 Ⓒ Лига Банк, 2019
        </p>
      </section>
      <section className="footer__navigation">
        <FooterNavigation />
      </section>
      <section className="footer__contacts">
        <h2 className="visually-hidden">Контакты</h2>
        <Contacts />
      </section>
      <section className="footer__social">
        <h2 className="visually-hidden">Мы в социальных сетях</h2>
        <Social />
      </section>
    </div>
  </footer>
);

export default Footer;
