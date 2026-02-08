import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import PaymentMethods from './components/PaymentMethods';
import ReturnsPolicy from './components/ReturnsPolicy';
import ShippingInfo from './components/ShippingInfo';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Services />
        <PaymentMethods />
        <ReturnsPolicy />
        <ShippingInfo />
        <TrustBadges />
      </main>
      <Footer />
    </div>
  );
}

export default App;
