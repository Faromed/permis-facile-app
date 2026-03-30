import { Scale, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import config from '../config'

export default function Legal() {
  return (
    <div>
      <section className="gradient-hero py-16 md:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Scale size={48} className="mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Mentions légales</h1>
          <p className="text-sm text-white/60">Informations légales obligatoires</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-700 font-medium mb-8 hover:gap-3 transition-all text-sm">
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Éditeur de l'application</h2>
              <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 space-y-2">
                <p><strong>Nom :</strong> {config.appName}</p>
                <p><strong>Raison sociale :</strong> {config.companyName}</p>
                <p><strong>Forme juridique :</strong> {config.companyType}</p>
                <p><strong>Siège social :</strong> {config.address}</p>
                <p><strong>IFU :</strong> {config.ifu}</p>
                <p><strong>RCCM :</strong> {config.rccm}</p>
                <p><strong>Directeur de publication :</strong> {config.directorName}</p>
                <p><strong>Email :</strong> <a href={`mailto:${config.contactEmail}`} className="text-primary-700 hover:underline">{config.contactEmail}</a></p>
                <p><strong>Téléphone :</strong> <a href={`tel:${config.contactPhoneRaw}`} className="text-primary-700 hover:underline">{config.contactPhone}</a></p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Hébergement</h2>
              <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 space-y-2">
                <p><strong>Backend :</strong> Google Firebase — Google LLC, Mountain View, CA, USA</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 space-y-2 mt-4">
                <p><strong>Site web :</strong> Vercel Inc. — Walnut, CA, USA</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Propriété intellectuelle</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tous les éléments (design, code, logo, cours, questions) sont protégés.
                Le nom et le logo « {config.appName} » sont des marques déposées.
                Toute reproduction non autorisée constitue une contrefaçon.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Protection des données</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Conformément à la législation béninoise et aux directives de l'APDP.
                Voir <Link to="/confidentialite" className="text-primary-700 hover:underline">Politique de confidentialité</Link>.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Services tiers</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li><strong>Google Firebase</strong> : authentification, BDD, stockage, analytics</li>
                <li><strong>GitHub</strong> : hébergement APK via Releases</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation de responsabilité</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {config.appName} est un outil d'aide. Nous ne sommes pas responsables des résultats
                à l'examen officiel ni des interruptions de service.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Droit applicable</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Droit de la République du Bénin. Juridiction : tribunaux de Cotonou.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact</h2>
              <ul className="list-none text-sm text-gray-600 space-y-1">
                <li>📧 <a href={`mailto:${config.contactEmail}`} className="text-primary-700 hover:underline">{config.contactEmail}</a></li>
                <li>📱 <a href={`tel:${config.contactPhoneRaw}`} className="text-primary-700 hover:underline">{config.contactPhone}</a></li>
                <li>📍 {config.address}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}