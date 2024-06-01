import "./App.css";
import Chapters from "./Pages/Chapters/Chapters";
import About from "./Pages/About/About";
import Events from "./Pages/Events/events";

function App() {
  return (
    <section className="main">
      <About />
      <Chapters />
      <Events />
    </section>
  );
}

export default App;
