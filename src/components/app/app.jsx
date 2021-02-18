import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ConverterScreen from "../converter-screen/converter-screen";
import "../../scss/style.scss";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <ConverterScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
