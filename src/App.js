import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./components/Produtos/Produtos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contato from "./components/Contato/Contato";
import styles from "./App.css";
import Produto from "./components/Produto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
