import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutMe from "./Components/aboutMe";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import {ChakraProvider} from '@chakra-ui/react'
function App() {
    return (
        <ChakraProvider>
            <div className="p-[20px]">
                {/*  Nav Bar */}
                <NavBar/>
                {/* Intro  */}
                <Home id="home"/>
                {/* About Me */}
                <AboutMe id="aboutMe"/>
                {/*  Skills */}
                <Skills id="skills"/>
                {/* Portfolio */}
                <Portfolio id="portfolio"/>
                {/* Companies */}
                {/* Contact Us  */}
                <div>
                    <Contact />
                </div>
                {/* Footer  */}
                <Footer/>
            </div>
        </ChakraProvider>
    );
}

export default App;
