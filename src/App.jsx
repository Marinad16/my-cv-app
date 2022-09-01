import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="app">
      <Header open={openMenu} setOpenMenu={setOpenMenu} />
      <Menu open={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
