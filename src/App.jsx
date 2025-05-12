import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar /> 

        <header className="header">
          <h1>Arya Ram</h1> 
        </header>
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={
              <section id="hero">
                <h2>Welcome</h2>
                <p>I'm a junior developer with a passion for building clean and user-friendly websites.</p>
              </section>
            } />
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
