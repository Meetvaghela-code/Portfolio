import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components (Header and Footer live here)
import Header from './components/Header';
import Footer from './components/Footer';

// Pages (These should be in the 'pages' folder, not 'components')
import Home from './pages/Home';       // <-- Change ./components/ to ./pages/
import About from './pages/About';     // <-- Change ./components/ to ./pages/
import Projects from './pages/Projects'; // <-- Change ./components/ to ./pages/
import Resume from './pages/Resume';   // <-- Change ./components/ to ./pages/
import Contact from './pages/Contact'; // <-- Change ./components/ to ./pages/

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 position-relative">
        
        {/* Add this Block for Background */}
        <div className="aurora-container">
          <div className="aurora-blob blob-1"></div>
          <div className="aurora-blob blob-2"></div>
          <div className="aurora-blob blob-3"></div>
        </div>

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
      </div>
    </Router>
  );
}

export default App;