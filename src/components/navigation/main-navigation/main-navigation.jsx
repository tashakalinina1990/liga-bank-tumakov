import React from "react";
import Navigation from "../navigation";
import { NavigationTypes } from "../../../const";
import "./main-navigation.scss";

const MainNavigation = (props) => (
  <Navigation navigationType={NavigationTypes.MAIN} {...props} />
);

export default MainNavigation;
