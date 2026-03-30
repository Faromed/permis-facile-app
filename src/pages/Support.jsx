import { useState } from 'react'
import { Mail, Phone, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react'
import config from '../config'

export default function Support() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${config.contactEmail}?subject=${encodeURIComponent(
      `[Support] ${form.subject}`
    )}&body=${encodeURIComponent(
      `Nom : ${form.name}\nTéléphone : ${form.phone}\nEmail : ${form.email}\n\n${form.message}`
    )}`
    setSent(true)
  }

  const methods = [
    { icon: MessageCircle, title: 'WhatsApp', desc: 'Réponse rapide.', action: 'Ouvrir WhatsApp',
      href: `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent("Bonjour, j'ai besoin d'aide avec Permis Facile.")}`,
      color: 'bg-primary-50 hover:bg-primary-100', iconColor: 'text-primary-700' },
    { icon: Mail, title: 'Email', desc: 'Envoyez un email.', action: config.contactEmail,
      href: `mailto:${config.contactEmail}`,
      color: 'bg-accent-50 hover:bg-accent-100', iconColor: 'text-accent-600' },
    { icon: Phone, title: 'Téléphone', desc: 'Appelez-nous.', action: config.contactPhone,
      href: `tel:${config.contactPhoneRaw}`,
      color: 'bg-danger-50 hover:bg-danger-100', iconColor: 'text-danger-600' },
  ]

  return (
    <div>
      <section className="gradient-hero py-16 md:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Support & Assistance</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Notre équipe est là pour vous aider.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {methods.map((m, i) => (
              <a key={i} href={m.href} target={m.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                 className="card border border-gray-100 text-center hover:-translate-y-1 block">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${m.color} transition-colors`}>
                  <m.icon size={26} className={m.iconColor} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{m.desc}</p>
                <span className="text-sm font-medium text-primary-700">{m.action}</span>
              </a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title">Envoyez-nous un message</h2>
            </div>

            {sent ? (
              <div className="card border border-primary-200 bg-primary-50 text-center py-12">
                <CheckCircle size={48} className="text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message prêt !</h3>
                <p className="text-gray-600 mb-4">Votre client email devrait s'ouvrir.</p>
                <button onClick={() => setSent(false)} className="text-primary-700 font-medium text-sm hover:underline">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom complet *</label>
                    <input type="text" required placeholder="Votre nom"
                           value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                    <input type="tel" placeholder="+229 XX XX XX XX"
                           value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input type="email" placeholder="votre@email.com"
                         value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                         className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Sujet *</label>
                  <select required value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm">
                    <option value="">Sélectionnez…</option>
                    <option>Problème d'installation</option>
                    <option>Problème de connexion</option>
                    <option>Question cours/examens</option>
                    <option>Question sur mon compte</option>
                    <option>Problème de paiement</option>
                    <option>Signaler un bug</option>
                    <option>Suggestion</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea required rows={5} placeholder="Décrivez votre demande…"
                            value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto">
                  <Send size={18} /> Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card border border-gray-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <Clock size={26} className="text-primary-700" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Horaires de support</h3>
              <p className="text-sm text-gray-600">
                Du <strong>lundi au vendredi</strong>, de <strong>8h à 18h</strong> (GMT+1).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}