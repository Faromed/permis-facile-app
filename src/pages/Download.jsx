import { Download, Smartphone, Shield, CheckCircle, AlertTriangle, ChevronRight, HelpCircle, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import config from '../config'

const steps = [
  { step: 1, title: 'Téléchargez le fichier APK',       desc: 'Cliquez sur le bouton ci-dessus. Le téléchargement démarre automatiquement.' },
  { step: 2, title: 'Autorisez les sources inconnues',  desc: 'Si demandé, allez dans Paramètres → Sécurité → Sources inconnues et activez l\'option.' },
  { step: 3, title: 'Installez l\'application',          desc: 'Ouvrez le fichier téléchargé et appuyez sur « Installer ».' },
  { step: 4, title: 'Lancez Permis Facile !',            desc: 'Connectez-vous et commencez à réviser.' },
]

export default function DownloadPage() {
  return (
    <div>
      <section className="gradient-hero py-16 md:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-6">
            <Smartphone size={16} />
            <span className="text-sm font-medium">Android</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Télécharger Permis Facile</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            L'application n'est pas encore sur Google Play.
            Téléchargez le fichier APK depuis notre dépôt sécurisé.
          </p>
          <a href={config.apkUrl} target="_blank" rel="noopener noreferrer"
             className="btn-accent text-lg px-10 py-4 inline-flex">
            <Download size={24} />
            Télécharger l'APK
          </a>
          <p className="text-sm text-white/60 mt-4 flex items-center justify-center gap-2">
            <Shield size={14} /> Hébergé sur GitHub Releases · Android 8.0+
          </p>
        </div>
      </section>

      <section className="bg-accent-50 border-b border-accent-200">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4">
          <AlertTriangle size={24} className="text-accent-700 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-accent-800 mb-1">Bientôt sur Google Play Store</p>
            <p className="text-sm text-accent-700">
              Nous travaillons pour rendre Permis Facile disponible sur le Play Store.
              En attendant, le fichier APK est hébergé de manière sécurisée sur GitHub Releases.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card border border-gray-100 flex flex-col md:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
              <Github size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Pourquoi GitHub Releases ?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Le fichier APK est stocké sur <strong>GitHub Releases</strong>, plateforme de confiance mondiale.
                Cela garantit l'intégrité du fichier et la traçabilité de chaque version.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center mb-12">Guide d'installation</h2>
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-700 text-white font-bold text-lg
                                  flex items-center justify-center shadow-lg shadow-primary-700/30">
                    {s.step}
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 h-12 bg-primary-200 mx-auto mt-2" />}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Configuration requise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Minimum</h3>
              <ul className="space-y-3">
                {['Android 8.0 (Oreo)+','2 Go de RAM','100 Mo d\'espace libre','Connexion 3G pour le 1er lancement'].map((r,i)=>(
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-primary-600 flex-shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Recommandé</h3>
              <ul className="space-y-3">
                {['Android 10 ou supérieur','3 Go de RAM ou plus','200 Mo d\'espace libre','WiFi pour télécharger les cours'].map((r,i)=>(
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-accent-600 flex-shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <HelpCircle size={32} className="text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600 mb-4">Problème d'installation ? Notre équipe vous aide.</p>
          <Link to="/support" className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all">
            Contacter le support <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}