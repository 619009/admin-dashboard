import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Common/Header';
import Sidebar from './Components/Common/Sidebar';
import Footer from './Components/Common/Footer';
import Content from './Components/Common/Content';
import Layout from './Components/Common/Layout';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />} />
      {/* <Route path="/" element={<Content />} /> */}
      {/* <Route path="/" element={<Footer />} /> */}
      {/* <Route path="/" element={<Sidebar />} /> */}
      {/* <Route path="/" element={<Header />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
