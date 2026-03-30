import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqData = [
  {
    category: 'Général',
    questions: [
      { q: 'Qu\'est-ce que Permis Facile ?', a: 'Permis Facile est une application mobile qui vous aide à préparer l\'examen du permis de conduire au Bénin. Elle propose des cours de code de la route, des examens blancs, un suivi de progression et un contrôle d\'éligibilité à l\'examen national.' },
      { q: 'L\'application est-elle gratuite ?', a: 'L\'application offre un accès à l\'ensemble des fonctionnalités de base. Certaines options avancées peuvent nécessiter un abonnement. Consultez l\'application pour les tarifs.' },
      { q: 'Permis Facile est-il conforme au programme officiel ?', a: 'Oui, les cours et sujets sont conformes au programme officiel du code de la route du Bénin, mis à jour régulièrement.' },
      { q: 'Faut-il être inscrit en auto-école ?', a: 'L\'application est un complément à votre formation. Pour l\'examen officiel, vous devez être inscrit dans une auto-école agréée.' },
    ],
  },
  {
    category: 'Utilisation',
    questions: [
      { q: 'Comment créer mon compte ?', a: 'Votre compte est créé par votre auto-école. Vous recevez vos identifiants et pouvez vous connecter directement.' },
      { q: 'Comment fonctionne le suivi de progression ?', a: 'L\'application comptabilise les sujets traités, votre note moyenne, et le nombre de réussites. Un indicateur circulaire montre votre progression globale.' },
      { q: 'Que signifie « Éligible à l\'examen » ?', a: 'Quand vous avez traité suffisamment de sujets avec un bon taux de réussite, l\'app affiche que vous êtes éligible à l\'examen national.' },
      { q: 'Puis-je utiliser l\'app sans Internet ?', a: 'Oui ! Téléchargez les cours pour les consulter hors-ligne. Une connexion est requise pour synchroniser vos résultats.' },
      { q: 'Puis-je utiliser mon compte sur plusieurs appareils ?', a: 'Une seule session est autorisée à la fois. Si vous vous connectez ailleurs, la session précédente sera fermée automatiquement.' },
    ],
  },
  {
    category: 'Technique',
    questions: [
      { q: 'Sur quels appareils fonctionne l\'app ?', a: 'Tous les smartphones Android 8.0 (Oreo) ou supérieur — la quasi-totalité des téléphones au Bénin.' },
      { q: 'Disponible sur iPhone ?', a: 'Pas encore. La version iOS est en préparation.' },
      { q: 'Pourquoi pas sur le Play Store ?', a: 'Nous y travaillons. En attendant, téléchargez l\'APK en toute sécurité depuis nos releases GitHub.' },
      { q: 'Problème d\'installation de l\'APK ?', a: 'Activez "Sources inconnues" dans vos paramètres de sécurité. Si ça persiste, contactez notre support.' },
    ],
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown size={20} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div>
      <section className="gradient-hero py-16 md:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <HelpCircle size={48} className="mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Foire aux questions</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {faqData.map((sec, i) => (
            <div key={i} className="mb-12 last:mb-0">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                {sec.category}
              </h2>
              <div className="space-y-3">
                {sec.questions.map((q, j) => <FAQItem key={j} question={q.q} answer={q.a} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Pas trouvé votre réponse ?</h3>
          <p className="text-gray-600 mb-6">Notre support est disponible pour vous aider.</p>
          <Link to="/support" className="btn-primary">Contacter le support</Link>
        </div>
      </section>
    </div>
  )
}