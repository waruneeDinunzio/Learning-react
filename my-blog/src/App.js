import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
}

export default App;
