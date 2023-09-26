import React from 'react';
import './App.css';
import Header from './Components/Common/Header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
