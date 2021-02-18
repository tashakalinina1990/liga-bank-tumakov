import React from "react";
import { Link } from "react-router-dom";
import "./user-menu.scss";

const Login = () => (
  <ul className="user-menu">
    <li className="user-menu__item">
      <Link className="user-menu__link user-menu__link--login" to="#">
        Войти в Интернет-банк
      </Link>
    </li>
  </ul>
);

export default Login;
