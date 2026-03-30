import { Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import config from '../config'

export default function Privacy() {
  return (
    <div>
      <section className="gradient-hero py-16 md:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Shield size={48} className="mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Politique de confidentialité</h1>
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                La présente politique décrit comment {config.appName} collecte, utilise, stocke et protège vos données personnelles,
                conformément à la législation béninoise et aux directives de l'APDP du Bénin.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Données collectées</h2>
              <h3 className="font-semibold text-gray-800 mb-2">2.1 Données d'inscription</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li>Numéro de téléphone (authentification par SMS)</li>
                <li>Nom, prénom et initiales</li>
                <li>Identifiant de l'appareil (sécurité session unique)</li>
              </ul>
              <h3 className="font-semibold text-gray-800 mb-2 mt-4">2.2 Données d'utilisation</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li>Résultats des examens blancs</li>
                <li>Progression dans les cours</li>
                <li>Statistiques de performance</li>
                <li>Données techniques (version Android, modèle)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Utilisation des données</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li>Authentification et gestion de votre compte</li>
                <li>Suivi de progression et statistiques</li>
                <li>Vérification d'éligibilité à l'examen</li>
                <li>Sécurisation (session unique par appareil)</li>
                <li>Amélioration de l'application</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Stockage et sécurité</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Données stockées sur Google Firebase (Firestore, Auth, Storage). Communications chiffrées HTTPS.
                L'identifiant d'appareil garantit une seule session active.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Partage des données</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">Nous ne vendons ni ne louons vos données. Partage possible avec :</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li><strong>Google Firebase</strong> : hébergement, authentification</li>
                <li><strong>Votre auto-école</strong> : statistiques de progression</li>
                <li><strong>Autorités compétentes</strong> : sur demande légale</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Vos droits</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li><strong>Accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Rectification</strong> : corriger vos informations</li>
                <li><strong>Suppression</strong> : demander la suppression de votre compte</li>
                <li><strong>Opposition</strong> : vous opposer à certains traitements</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                Contact : <a href={`mailto:${config.contactEmail}`} className="text-primary-700 hover:underline">{config.contactEmail}</a>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Sécurité de session</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Une seule session active à la fois. Connexion sur un autre appareil = session actuelle fermée avec alerte.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Modifications</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cette politique peut être modifiée. Vous serez informé(e) via l'application.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact</h2>
              <ul className="list-none text-sm text-gray-600 space-y-1">
                <li>📧 <a href={`mailto:${config.contactEmail}`} className="text-primary-700 hover:underline">{config.contactEmail}</a></li>
                <li>📱 <a href={`https://wa.me/${config.whatsappNumber}`} className="text-primary-700 hover:underline">{config.contactPhone}</a></li>
                <li>📍 {config.address}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}