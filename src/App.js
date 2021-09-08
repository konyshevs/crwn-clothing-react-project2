import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Route } from "react-router-dom";

const ShopHats = () => {
  return <h1>HATS</h1>;
};

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} />
      <Route path="/shop/hats">
        <ShopHats />
      </Route>
      <Route path="/jackets">
        <HomePage />
      </Route>
      <Route path="/sneakers">
        <HomePage />
      </Route>
      <Route path="/womans">
        <HomePage />
      </Route>
      <Route path="/womans">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
