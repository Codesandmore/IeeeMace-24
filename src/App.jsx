import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Chapters from "./Pages/Chapters/Chapters";
import About from "./Pages/About/About";
import Events from "./Pages/Events/events";
import Execom from "./Pages/Execom/Execom";
import ExecomFull from "./Pages/Execom/ExecomFull";
import Gallery from "./Pages/Gallery/Gallery";
import Hero from "./Pages/Hero/Hero";
import Navbar from "./Pages/Navbar/Navbar";
import Hero2 from "./Pages/Hero/Hero2";
import Contact from "./Pages/ContactUs/ContactUs";
import Footer from "./Pages/Footer/Footer";
import WebTeam from "./Pages/Execom/WebTeam";
function App() {
  return (
    <div style={{ position: "relative" }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Hero2 />
                <section className="main">
                  <About />
                  <Events />
                  <Execom />
                  <Gallery />
                  <Chapters />
                  <Contact />
                </section>
                <Footer />
              </>
            }
          />
          <Route path="/execom" element={<ExecomFull />} />
          <Route path="/webteam" element={<WebTeam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
