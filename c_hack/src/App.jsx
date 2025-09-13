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
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Always visible */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<><Hero /><Features /> <Pricing/><Footer/> </>} />

          {/* Static Pages */}
          <Route path="/about-us" element={<><Ab /><Footer/></>} />
          <Route path="/demo" element={<><Demo /><Footer/></>} />

          {/* Feature Pages */}
          <Route path="/features/endpoint-security" element={<><Es /><Footer/></>} />
          <Route path="/features/network-security" element={<><Ns /><Footer/></>} />
          <Route path="/features/cloud-security" element={<><Cs /><Footer/></>} />
          {/* Optional: All features overview */}
          <Route path="/features" element={<div>All Features Overview</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
