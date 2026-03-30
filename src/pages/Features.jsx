import { Link } from 'react-router-dom'
import {
  BookOpen, FileText, BarChart3, CheckCircle, TrendingUp,
  WifiOff, Shield, Download, Target, Clock, Award,
  Smartphone, FolderOpen, Bell, RefreshCw, Zap, Users
} from 'lucide-react'

const sections = [
  {
    badge: { icon: Users, label: 'Pour les élèves', color: 'bg-primary-50 text-primary-700' },
    title: 'Apprenez et entraînez-vous',
    subtitle: 'Tout ce qu\'il faut pour maîtriser le code de la route et réussir l\'examen.',
    iconColor: 'bg-primary-50 text-primary-700',
    items: [
      { icon: BookOpen,     title: 'Cours structurés',          desc: 'Des leçons claires couvrant l\'intégralité du programme officiel du code de la route béninois.' },
      { icon: FileText,     title: '60+ sujets d\'examen',      desc: 'Des sujets d\'examen blanc fidèles aux conditions réelles : QCM, minuteur, correction détaillée.' },
      { icon: BarChart3,    title: 'Statistiques détaillées',   desc: 'Moyenne générale, nombre d\'examens passés, taux de réussite — tout est là.' },
      { icon: TrendingUp,   title: 'Progression visuelle',     desc: 'Un indicateur circulaire montre votre avancement global (sujets traités / total).' },
      { icon: CheckCircle,  title: 'Éligibilité à l\'examen',   desc: 'L\'app vérifie automatiquement si vous remplissez les conditions pour l\'examen national.' },
      { icon: Target,       title: 'Correction instantanée',   desc: 'Après chaque examen blanc, consultez la correction de chaque question.' },
      { icon: FolderOpen,   title: 'Gestion du dossier',       desc: 'Suivez l\'état de votre dossier d\'inscription directement dans l\'application.' },
      { icon: WifiOff,      title: 'Mode hors-ligne',           desc: 'Téléchargez les cours et révisez sans Internet — idéal partout au Bénin.' },
      { icon: Clock,        title: 'Accès 24/7',               desc: 'Pas d\'horaires : révisez quand vous voulez, à votre rythme.' },
    ],
  },
  {
    badge: { icon: Shield, label: 'Sécurité & Fiabilité', color: 'bg-danger-50 text-danger-600' },
    title: 'Une application sûre et fiable',
    subtitle: 'Vos données sont protégées et votre expérience est optimale.',
    iconColor: 'bg-danger-50 text-danger-600',
    items: [
      { icon: Shield,       title: 'Session unique',          desc: 'Un seul appareil connecté à la fois. Si quelqu\'un se connecte ailleurs, vous êtes prévenu.' },
      { icon: Smartphone,   title: 'Compatible',              desc: 'Fonctionne sur tous les smartphones Android 8.0+ y compris les modèles d\'entrée de gamme.' },
      { icon: Zap,          title: 'Ultra rapide',             desc: 'Chargement en moins de 3 secondes, même sur une connexion 3G.' },
      { icon: RefreshCw,    title: 'Mises à jour régulières', desc: 'De nouveaux sujets et cours sont ajoutés pour rester à jour avec le programme officiel.' },
    ],
  },
]

export default function Features() {
  return (
    <div>
      <section className="gradient-hero py-16 md:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Fonctionnalités</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Découvrez tout ce que Permis Facile met à votre disposition pour réussir votre permis.
          </p>
        </div>
      </section>

      {sections.map((sec, si) => (
        <section key={si} className={`py-16 md:py-20 ${si % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-2 ${sec.badge.color} rounded-full px-4 py-2 mb-4 text-sm font-medium`}>
                <sec.badge.icon size={16} />
                {sec.badge.label}
              </div>
              <h2 className="section-title">{sec.title}</h2>
              <p className="section-subtitle">{sec.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sec.items.map((f, i) => (
                <div key={i} className="card border border-gray-100 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl ${sec.iconColor} flex items-center justify-center mb-3`}>
                    <f.icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="gradient-hero py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Convaincu(e) ?</h2>
          <p className="text-white/80 mb-8">Téléchargez l'application et commencez votre préparation.</p>
          <Link to="/telecharger" className="btn-accent">
            <Download size={20} /> Télécharger maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}