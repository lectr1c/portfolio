import { MutableRefObject, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Hero from "./Pages/Hero";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
