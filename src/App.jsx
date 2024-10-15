import React from "react";
import "./global.scss";

import Header from "./Components/Header/Header";
import Animes from "./Components/Main/Animes/AnimeCatalogo";



function App() {
  return (
    <>
      <Header />
      <Animes />
    </>
  );
}

export default App;
