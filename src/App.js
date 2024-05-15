import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutMe from "./Components/aboutMe";
import Skills from "./Components/Skills";

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
      {/* Companies */}
      {/* Contact Us  */}
      {/* Footer  */}
    </div>
  );
}

export default App;
