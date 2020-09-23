import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Products from "./components/Products";
import GlobalStyles from "./styles/GlobalStyles";

export default function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route exact path="/" component={Products} />
      <Route path="/product" component={Layout} />
    </BrowserRouter>
  );
}
