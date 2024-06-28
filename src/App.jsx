import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NewsByCategory from './Pages/NewsByCategory'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Email from './components/Email'
import Contact from './components/Contact'
import { useState } from 'react'
function App() {
  const [country, setCountry] = useState(null)
  return (
    <Router>
      <Nav country={country} />
      <Routes>
        <Route path='/' element={<Home func={setCountry} country={country} />} />
        <Route path='/news/:category/:country' element={<NewsByCategory />} />
      </Routes>
      <Email/>
      <Contact/>
      <Footer />
    </Router>
  )
}

export default App
