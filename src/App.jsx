import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import { useSelector } from 'react-redux';


function App() {
  const darkMode = useSelector(
      state => state.theme.darkMode
  );
  return (
    <div
    className={
        darkMode
        ? "bg-[#333] text-white min-h-screen"
        : "bg-white text-[#333] min-h-screen"
    }>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/product/:id" element={<ProductDetail/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
