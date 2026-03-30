import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Features from './pages/Features'
import Download from './pages/Download'
import FAQ from './pages/FAQ'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Legal from './pages/Legal'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fonctionnalites" element={<Features />} />
          <Route path="/telecharger" element={<Download />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/confidentialite" element={<Privacy />} />
          <Route path="/conditions" element={<Terms />} />
          <Route path="/mentions-legales" element={<Legal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}