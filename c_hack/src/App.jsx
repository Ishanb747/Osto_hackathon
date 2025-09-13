import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Ab from './pages/Ab' 
import Demo from './pages/Demo'
import Es from './pages/Es'
import Ns from './pages/Ns'
import Cs from './pages/Cs'
import Pricing from './components/Pricing'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Always visible */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<><Hero /><Features /> <Pricing/></>} />

          {/* Static Pages */}
          <Route path="/about-us" element={<Ab />} />
          <Route path="/demo" element={<Demo />} />

          {/* Feature Pages */}
          <Route path="/features/endpoint-security" element={<Es/>} />
          <Route path="/features/network-security" element={<Ns/>} />
          <Route path="/features/cloud-security" element={<Cs/>} />
          {/* Optional: All features overview */}
          <Route path="/features" element={<div>All Features Overview</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
