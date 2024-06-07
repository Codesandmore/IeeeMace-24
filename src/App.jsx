import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Chapters from './Pages/Chapters/Chapters';
import About from './Pages/About/About';
import Events from './Pages/Events/events';
import Execom from './Pages/Execom/Execom';
import ExecomFull from './Pages/Execom/ExecomFull';
import Gallery from './Pages/Gallery/Gallery';

function App() {
  return (
    <Router>
      <section className="main">
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Events />
              <Execom />
              <Gallery />
              <Chapters />
            </>
          } />
          <Route path="/execom" element={<ExecomFull />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
