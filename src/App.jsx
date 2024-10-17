import React from "react";
import "./global.scss";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import Animes from "./Components/Main/AnimeCatalogo";
import Filmes from "./Components/Main/FilmeCatalogo";
import Series from "./Components/Main/SerieCatalogo.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/Animes" element={<Animes />} />
          <Route path="/Filmes" element={<Filmes />} />
          <Route path="/Series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
