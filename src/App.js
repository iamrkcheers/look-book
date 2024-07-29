import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LookBook from "../src/components/LookBook";
import Product from "../src/components/Product";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LookBook />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
