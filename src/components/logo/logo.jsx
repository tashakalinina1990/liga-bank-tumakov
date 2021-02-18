import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";

const Logo = () => (
  <Link className="logo" to="#">
    <img
      className="logo__image"
      src="img/logo.svg"
      width="28"
      height="25"
      alt="Логотип лига банка — синяя пирамида"
    />
    <picture>
      <source
        type="image/webp"
        srcSet="img/logo-text@1x.webp 1x, img/logo-text@2x.webp 2x"
      />
      <img
        className="logo__text"
        src="img/logo-text@1x.png"
        srcSet="img/logo-text@2x.png 2x"
        width="112"
        height="16"
        alt="Название компании — лига банк"
      />
    </picture>
  </Link>
);

export default Logo;
