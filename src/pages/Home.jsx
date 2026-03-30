import { Link } from 'react-router-dom'
import {
  BookOpen, BarChart3, CheckCircle, Shield, Download,
  ChevronRight, Smartphone, WifiOff, Clock,
  Target, Award, TrendingUp, ArrowRight, Star
} from 'lucide-react'
import PhoneMockup from '../components/PhoneMockup'

const stats = [
  { number: '60+', label: 'Sujets d\'examen', icon: BookOpen },
  { number: '100%', label: 'Programme officiel', icon: Shield },
  { number: '24/7', label: 'Accès illimité', icon: Clock },
  { number: '95%', label: 'Taux de réussite', icon: Award },
]

const features = [
  {
    icon: BookOpen,
    title: 'Cours complets',
    desc: 'Des cours de code de la route structurés, clairs et conformes au programme officiel béninois.',
    color: 'bg-primary-50 text-primary-700',
  },
  {
    icon: Target,
    title: 'Examens blancs',
    desc: 'Entraînez-vous avec plus de 60 sujets d\'examen type pour être prêt le jour J.',
    color: 'bg-accent-50 text-accent-600',
  },
  {
    icon: BarChart3,
    title: 'Suivi de progression',
    desc: 'Visualisez votre avancement, votre moyenne générale et votre taux de réussite en temps réel.',
    color: 'bg-danger-50 text-danger-600',
  },
  {
    icon: CheckCircle,
    title: 'Éligibilité à l\'examen',
    desc: 'L\'application vous indique quand vous êtes prêt à passer l\'examen national.',
    color: 'bg-primary-50 text-primary-700',
  },
  {
    icon: WifiOff,
    title: 'Mode hors-ligne',
    desc: 'Téléchargez les cours et révisez même sans connexion Internet.',
    color: 'bg-accent-50 text-accent-600',
  },
  {
    icon: Shield,
    title: 'Sécurisé',
    desc: 'Votre compte est protégé. Une seule session active par appareil pour éviter le partage.',
    color: 'bg-danger-50 text-danger-600',
  },
]

const steps = [
  { step: '1', title: 'Téléchargez', desc: 'Installez l\'application sur votre smartphone Android.' },
  { step: '2', title: 'Apprenez', desc: 'Suivez les cours et entraînez-vous sur les sujets d\'examen.' },
  { step: '3', title: 'Réussissez', desc: 'Passez votre examen officiel en toute confiance !' },
]

const testimonials = [
  { name: 'Koffi A.', city: 'Cotonou', text: 'Grâce à Permis Facile, j\'ai eu mon permis du premier coup. Les sujets sont très proches de l\'examen réel.', rating: 5 },
  { name: 'Binta S.', city: 'Parakou', text: 'L\'application est simple et je peux réviser même quand il n\'y a pas de réseau. Vraiment pratique !', rating: 5 },
  { name: 'Eric M.', city: 'Calavi', text: 'Le suivi de progression m\'a motivé à m\'entraîner chaque jour. Je recommande à tous les candidats.', rating: 4 },
]

export default function Home() {
  return (
    <div>
      {/* ==================== HERO ==================== */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Disponible au Bénin 🇧🇯</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Réussissez votre{' '}
                <span className="text-accent-400">permis</span>
                <br />du premier coup
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                Préparez-vous efficacement à l'examen du permis de conduire avec des cours complets,
                des sujets d'examen type et un suivi de progression intelligent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/telecharger" className="btn-accent text-base">
                  <Download size={20} />
                  Télécharger gratuitement
                </Link>
                <Link to="/fonctionnalites" className="btn-outline text-base">
                  Voir les fonctionnalités
                  <ChevronRight size={18} />
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
                <span className="flex items-center gap-1"><Smartphone size={16} /> Android</span>
                <span className="flex items-center gap-1"><Shield size={16} /> 100 % Sécurisé</span>
              </div>
            </div>

            {/* Phone mockup — INCHANGÉ */}
            <div className="hidden lg:flex justify-center animate-fade-in-up animate-delay-200">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <s.icon className="mx-auto mb-2 text-primary-600" size={28} />
                <p className="text-2xl md:text-3xl font-extrabold text-gray-900">{s.number}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Tout pour réussir votre{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
                permis
              </span>
            </h2>
            <p className="section-subtitle">
              Une application complète, pensée pour les candidats au permis de conduire au Bénin.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="card group hover:-translate-y-1 border border-gray-100">
                <div className={`w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-4
                                group-hover:scale-110 transition-transform`}>
                  <f.icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/fonctionnalites"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all">
              Voir toutes les fonctionnalités <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Comment ça marche ?</h2>
            <p className="section-subtitle">En 3 étapes simples, préparez votre examen sereinement.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary-700 text-white text-2xl font-bold
                                flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-700/30">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-200" />
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DASHBOARD PREVIEW ==================== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <Target size={16} />
                Votre tableau de bord
              </div>
              <h2 className="section-title">Suivez votre progression en temps réel</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                L'application vous accompagne à chaque étape. Visualisez votre avancement,
                identifiez vos points faibles et améliorez-vous jour après jour.
              </p>
              <ul className="space-y-4">
                {[
                  'Progression globale avec indicateur visuel',
                  'Moyenne générale calculée automatiquement',
                  'Nombre de sujets traités et réussis',
                  'Vérification d\'éligibilité à l\'examen national',
                  'Cours téléchargeables pour étudier hors-ligne',
                  'Gestion de votre dossier d\'inscription',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-primary-700" />
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/telecharger" className="btn-primary">
                  <Download size={18} />
                  Commencer maintenant
                </Link>
              </div>
            </div>

            {/* Dashboard card */}
            <div className="hidden lg:flex justify-center">
              <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-danger-50 rounded-3xl p-8 w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                  {/* Progress */}
                  <div className="rounded-xl p-4 text-white" style={{ background: 'linear-gradient(135deg,#15803D,#14532D)' }}>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3"/>
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#FBBF24" strokeWidth="3"
                                  strokeDasharray="88" strokeDashoffset="30" strokeLinecap="round"/>
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">66%</span>
                      </div>
                      <div>
                        <p className="text-xs text-white/70">Progression</p>
                        <p className="text-xl font-bold">40 / 60</p>
                        <p className="text-xs text-white/80">sujets traités</p>
                      </div>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-primary-50 rounded-lg py-3">
                      <p className="text-lg font-bold text-primary-800">14.5</p>
                      <p className="text-[10px] text-gray-500">Moyenne /20</p>
                    </div>
                    <div className="bg-accent-50 rounded-lg py-3">
                      <p className="text-lg font-bold text-accent-700">40</p>
                      <p className="text-[10px] text-gray-500">Examens</p>
                    </div>
                    <div className="bg-danger-50 rounded-lg py-3">
                      <p className="text-lg font-bold text-danger-600">32</p>
                      <p className="text-[10px] text-gray-500">Réussis</p>
                    </div>
                  </div>
                  {/* Eligibility */}
                  <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl border border-primary-300">
                    <CheckCircle size={20} className="text-primary-600" />
                    <div>
                      <p className="text-xs font-bold text-primary-800">Éligible à l'examen ! 🎉</p>
                      <p className="text-[10px] text-gray-500">Vous pouvez passer l'examen national</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Ils ont réussi avec Permis Facile</h2>
            <p className="section-subtitle">Découvrez les témoignages de nos utilisateurs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16}
                          className={j < t.rating ? 'fill-accent-400 text-accent-400' : 'text-gray-300'} />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">« {t.text} »</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="gradient-hero py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à décrocher votre permis ?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Téléchargez Permis Facile et commencez votre préparation dès aujourd'hui. C'est gratuit !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/telecharger" className="btn-accent text-base">
              <Download size={20} />
              Télécharger l'APK
            </Link>
            <Link to="/support" className="btn-outline text-base">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}