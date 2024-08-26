import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Principal } from './components/Principal'
import { Airplanes } from './components/Airplanes'
import { Defense } from './components/Defense'
import { Space } from './components/Space'
import { About } from './components/About'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/airplanes" element={<Airplanes/>} />        
        <Route path="/defense" element={<Defense />} />
        <Route path="/space" element={<Space />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App