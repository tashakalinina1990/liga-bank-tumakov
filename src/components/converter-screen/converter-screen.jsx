import React from "react";
import Header from "../header/header";
import Promo from "../promo/promo";
import Converter from "../converter/converter";
import Footer from "../footer/footer";
import "./converter-screen.scss";

const ConverterScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Promo />
        <Converter />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ConverterScreen;
