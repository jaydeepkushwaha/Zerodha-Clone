import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './landing-page/home/Home';
import About from './landing-page/about/About';
import Pricing from './landing-page/pricing/Pricing';
import Product from './landing-page/products/Product';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Signup from './landing-page/signup/Signup';
import Support from './landing-page/support/Support';
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import NotFound from './landing-page/NotFound';
import Investment from './landing-page/investment/Investment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Product' element={<Product/>}/>
    <Route path='/Pricing' element={<Pricing/>}/>
    <Route path='/Support' element={<Support/>}/>
    <Route path='/Investment'  element={<Investment/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

