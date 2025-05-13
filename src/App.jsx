import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar'; 
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar /> 

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Arya Ram</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
