import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import { GoMoveToTop } from "react-icons/go";

function App() {
  const [scrollIcon , setScrollIcon] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll" , () => {
      if(window.scrollY > 300){
        setScrollIcon(true)
      } else {
        setScrollIcon(false)
      }
    })
  })
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="App">
      <Header id="up" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <a onClick={scrollToTop} href="#up" style={scrollIcon ? {opacity: "1" , transition: "0.5s" } : {opacity: "0" , transition: "0.5s"} } className="scrollToUp">
        <GoMoveToTop className="scrollToUpIcon" />
      </a>
      <Footer />
    </div>
  );
}

export default App;
