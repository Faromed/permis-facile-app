import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Heart } from 'lucide-react'
import config from '../config'

export default function Footer() {
  const y = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Barre tricolore en haut du footer */}
      <div className="flag-bar" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt={config.appName} className="h-10 w-10 object-contain"
                   onError={(e) => e.target.style.display = 'none'} />
              <span className="text-xl font-bold">
                <span className="text-white">Permis</span>
                <span className="text-danger-400">Facile</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              L'application de référence pour préparer et réussir votre permis de conduire au Bénin.
              Cours, examens blancs et suivi de progression.
            </p>
            <div className="flex gap-3">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
                   aria-label="Facebook"><Facebook size={18} /></a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
                   aria-label="Instagram"><Instagram size={18} /></a>
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Accueil</Link></li>
              <li><Link to="/fonctionnalites" className="hover:text-primary-400 transition-colors">Fonctionnalités</Link></li>
              <li><Link to="/telecharger" className="hover:text-primary-400 transition-colors">Télécharger</Link></li>
              <li><Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link to="/support" className="hover:text-primary-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/confidentialite" className="hover:text-primary-400 transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/conditions" className="hover:text-primary-400 transition-colors">Conditions d'utilisation</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-primary-400 transition-colors">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent-400 flex-shrink-0" />
                <a href={`mailto:${config.contactEmail}`} className="hover:text-accent-400 transition-colors">{config.contactEmail}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent-400 flex-shrink-0" />
                <a href={`tel:${config.contactPhoneRaw}`} className="hover:text-accent-400 transition-colors">{config.contactPhone}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-400 flex-shrink-0 mt-0.5" />
                <span>{config.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {y} {config.appName}. Tous droits réservés.</p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Développer par 
            <span>
                <a class='text-red-500 text-md text-base' href="https://wa.me/+22961228165">MDN Action</a>
            </span> mdnaction1@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}