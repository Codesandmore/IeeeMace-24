import "./App.css";
import Chapters from "./Pages/Chapters/Chapters";
import About from "./Pages/About/About";
import Events from "./Pages/Events/events";
import Execom from "./Pages/Execom/Execom";

function App() {
  return (
    <section className="main">
      <About />
      <Chapters />
      <Events />
      <Execom />
    </section>
  );
}

export default App;
