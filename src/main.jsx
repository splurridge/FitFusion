import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
    </Router>
  </div>,
)
