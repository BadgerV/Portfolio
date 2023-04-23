import "./App.css";
import TheNavbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Project from "./components/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <TheNavbar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
