import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './main pages/SignUp.jsx'
import Login from './main pages/Login.jsx'
import Dashboard from './main pages/Dashboard.jsx'
import Contact from './main pages/Contact.jsx'
import About from './main pages/About.jsx'
import Landing from './main pages/Landing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
  </div>,
)
