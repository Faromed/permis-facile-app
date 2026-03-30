import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'
import config from '../config'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/fonctionnalites', label: 'Fonctionnalités' },
  { to: '/faq', label: 'FAQ' },
  { to: '/support', label: 'Support' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const active = (p) => pathname === p

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt={config.appName}
                className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:scale-110 transition-transform"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary-700 items-center justify-center text-white font-bold text-xl"
                style={{ display: 'none' }}
              >
                PF
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold">
                  <span className="text-primary-700">Permis</span>
                  <span className="text-danger-600">Facile</span>
                </span>
                <p className="text-[10px] text-gray-400 -mt-1 hidden sm:block">
                  {config.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    active(l.to)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/telecharger"
                className="ml-4 inline-flex items-center gap-2 bg-primary-700 text-white font-semibold
                           py-2.5 px-6 rounded-xl hover:bg-primary-800 transition-all shadow-md hover:shadow-lg text-sm"
              >
                <Download size={16} />
                Télécharger
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 🇧🇯 Barre tricolore Bénin */}
        <div className="flag-bar" />

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="px-4 py-4 space-y-1 bg-white border-t border-gray-100">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                  active(l.to)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/telecharger"
              onClick={() => setOpen(false)}
              className="block w-full text-center mt-3 bg-primary-700 text-white font-semibold
                         py-3 px-6 rounded-xl text-sm"
            >
              <Download size={16} className="inline mr-2" />
              Télécharger l'application
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}