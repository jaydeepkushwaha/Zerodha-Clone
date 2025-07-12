import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing-page/home/HomePage';
import AboutPage from './landing-page/about/AboutPage';
import PricingPage from './landing-page/pricing/PricingPage';
import ProductPage from './landing-page/products/ProductPage';
import Signup from './landing-page/signup/Signup';
import SupportPage from './landing-page/support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HomePage/>
      <AboutPage/>
      <PricingPage/>
      <ProductPage/>
      <Signup/>
      <SupportPage/>
  </React.StrictMode>
);

