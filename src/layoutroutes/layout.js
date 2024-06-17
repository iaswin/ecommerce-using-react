import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Logout from '../components/Logout/Logout';
import ProductInfo from '../components/ProductDetails/ProductDetails';
import Buyy from '../components/Buy/buy';

function Layout() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/buy" element={<Buyy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Layout;
