import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import './Layout.css'

const Layout: React.FC = () => {
  return (
    <div className="layout">
        <Sidebar />
        {/* <div><Sidebar /></div> */}
      <div className="main">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
