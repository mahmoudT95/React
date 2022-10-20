import React from 'react'
import './App.css'
import Counterwrap from './components/CounterWrap'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './components/shop'
import About from './components/about'
import Products from './components/shop/products'
import Cart from './components/shop/cart'
import "./fontawesome-free-6.2.0-web/css/all.min.css"
import SignUp from './components/signup'
import Login from './components/login'
import 'bootstrap/dist/js/bootstrap.bundle.js'


function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/counter" element={<Counterwrap />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
