import React from 'react';
import './App.css';
import Counterwrap from './components/CounterWrap'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './components/shop';
import About from './components/about';
import Products from "./components/shop/products";










function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/counter" element={<Counterwrap/>}/>
        <Route path="/shop/:id" element={<Products/>} />
      </Routes>
    
      

  </Router>
   
   
  );
}

export default App;
