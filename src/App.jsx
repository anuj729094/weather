import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import Email from './components/Email'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import News from './components/News'
import Newshots from './components/Newshots'

function App() {
  const [country, setCountry] = useState(null)
  const [obj, setObj] = useState({
    type: "Latest News", location: country || "India"
  })
  return (
    <>
      <Nav country={country}/>
      <Header func={setCountry} />
      <Newshots country={country} type={obj.type} setobj={setObj} />
      <News obj={obj} />
      <Email />
      <Contact />
      <Footer />
    </>
  )
}

export default App
