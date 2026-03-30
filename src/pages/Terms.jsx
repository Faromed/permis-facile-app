import { FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import config from '../config'

export default function Terms() {
  return (
    <div>
      <section className="gradient-hero py-16 md:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <FileText size={48} className="mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
          <p className="text-sm text-white/60">Dernière mise à jour : Janvier 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-700 font-medium mb-8 hover:gap-3 transition-all text-sm">
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Objet</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les présentes CGU régissent l'utilisation de l'application {config.appName} et du site web associé.
                En utilisant la Plateforme, vous les acceptez intégralement.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description du service</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {config.appName} est une application de préparation au permis de conduire au Bénin :
                cours théoriques, examens blancs, suivi de progression, contrôle d'éligibilité.
                Elle complète la formation en auto-école sans la remplacer.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accès et inscription</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li>Compte créé par votre auto-école ou par inscription directe</li>
                <li>Authentification par numéro de téléphone + code SMS</li>
                <li>Compte personnel, non transférable</li>
                <li>Une seule session active par compte (sécurité par appareil)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Obligations de l'utilisateur</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li>Fournir des informations exactes</li>
                <li>Ne pas partager ses identifiants</li>
                <li>Ne pas contourner les mesures de sécurité</li>
                <li>Ne pas copier ni redistribuer le contenu</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Propriété intellectuelle</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tout le contenu (cours, questions, interfaces, code, logo, design) est protégé.
                Toute reproduction non autorisée est interdite.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation de responsabilité</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {config.appName} est un outil d'aide. Nous ne garantissons pas le succès à l'examen
                et ne remplaçons pas la formation pratique en auto-école.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Suspension de compte</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nous pouvons suspendre ou supprimer tout compte en cas de non-respect des CGU,
                fraude ou utilisation abusive.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Droit applicable</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Droit béninois. Juridiction : tribunaux de Cotonou, Bénin.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact</h2>
              <ul className="list-none text-sm text-gray-600 space-y-1">
                <li>📧 <a href={`mailto:${config.contactEmail}`} className="text-primary-700 hover:underline">{config.contactEmail}</a></li>
                <li>📱 <a href={`https://wa.me/${config.whatsappNumber}`} className="text-primary-700 hover:underline">{config.contactPhone}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}