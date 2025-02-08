import { useState } from 'react'
import Form from './Component/Form.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menu from './Component/Menu.jsx'
import HomePage from './Component/HomePage.jsx'
import AboutUs from './Component/AboutUs.jsx'

function App() {
  return (
    < div >
      <Menu />
      <HomePage />
      <AboutUs />
    </ div>

  )
}

export default App
