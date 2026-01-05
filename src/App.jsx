import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Reviews from "./components/Reviews.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />            
      <Projects />
      <Reviews />
      <Blog />
      <About /> 
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
