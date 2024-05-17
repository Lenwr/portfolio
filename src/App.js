import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutMe from "./Components/aboutMe";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="p-[20px]">
      {/*  Nav Bar */}
        <NavBar/>
      {/* Intro  */}
        <Home />
      {/* About Me */}
        <AboutMe />
      {/*  Skills */}
        <Skills />
      {/* Portfolio */}
        <Portfolio />
      {/* Companies */}
      {/* Contact Us  */}
        <div id="contact" >
            <Contact  />
        </div>
      {/* Footer  */}
        <Footer />
    </div>
  );
}

export default App;
