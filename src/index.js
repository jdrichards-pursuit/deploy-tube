import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VideoProvider } from './context/VideoContext';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Main = () => {
  return (
    <VideoProvider>
      <Router>
        <App />
      </Router>
    </VideoProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
