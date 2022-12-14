// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import About from './Pages/About';
import Home from './Pages/Home';
import Video from './Pages/Video';
import NavBar from './Components/NavBar';

function App() {
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
