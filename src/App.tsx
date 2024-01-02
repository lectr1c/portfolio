import "./Styles/index.scss";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <div className="placeholder"></div>
    </div>
  );
}

export default App;
