import React from "react";
import Navigation from "../navigation";
import { NavigationTypes } from "../../../const";
import "./footer-navigation.scss";

const FooterNavigation = (props) => (
  <Navigation navigationType={NavigationTypes.FOOTER} {...props} />
);

export default FooterNavigation;
