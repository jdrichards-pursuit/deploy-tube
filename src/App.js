// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
// COMPONENTS
import About from './pages/About';
import Home from './pages/Home';
import Video from './pages/Video';
import NavBar from './components/NavBar';

function App() {
  // const [comments, setComments] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
