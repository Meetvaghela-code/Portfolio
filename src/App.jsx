import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components (Header and Footer live here)
import Header from './components/Header';
import Footer from './components/Footer';
import TerminalChat from './components/TerminalChat';

// Pages (These should be in the 'pages' folder, not 'components')
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 position-relative">

        {/* Warm Claude Background */}
        <div className="claude-bg"></div>

        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <TerminalChat />
      </div>
    </Router>
  );
}

export default App;