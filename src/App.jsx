import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/layout/Layout'
import HomePage from './components/pages/HomePage'
import ServicesPage from './components/pages/ServicesPage'

// Dummy Pages (you can create real ones)
// import About from './pages/About'
// import Branches from './pages/Branches'
// import EventCatering from './pages/EventCatering'
// import VenueHire from './pages/VenueHire'
// import Franchise from './pages/Franchise'
// import Menu from './pages/Menu'
// import Contact from './pages/Contact'
// import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<HomePage />} />
          <Route path="services"element={<ServicesPage />} />

          {/* <Route path="about" element={<About />} />
      
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
