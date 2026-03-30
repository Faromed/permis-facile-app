/**
 * Simulation fidèle du home_eleve_screen.dart
 * Reproduit : Header, ProgressCard, QuickActions, EligibiliteCard, StatsCards, BottomNav
 */
export default function PhoneMockup() {
  return (
    <div className="relative select-none">
      {/* Outer phone shell */}
      <div className="w-[280px] h-[580px] bg-[#1a1a1a] rounded-[2.8rem] p-[6px] shadow-2xl animate-float">
        {/* Inner bezel */}
        <div className="w-full h-full bg-[#F5F5F5] rounded-[2.4rem] overflow-hidden flex flex-col relative">
          
          {/* ---- Status bar ---- */}
          <div className="bg-[#F5F5F5] px-6 pt-3 pb-1 flex justify-between items-center text-[10px] text-gray-500 font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[8px]">●●●●</span>
              <span>WiFi</span>
              <svg width="14" height="10" viewBox="0 0 14 10" className="ml-0.5">
                <rect x="0" y="5" width="3" height="5" rx="0.5" fill="#4CAF50"/>
                <rect x="4" y="3" width="3" height="7" rx="0.5" fill="#4CAF50"/>
                <rect x="8" y="1" width="3" height="9" rx="0.5" fill="#4CAF50"/>
                <rect x="12" y="0" width="2" height="10" rx="0.5" fill="#C8E6C9"/>
              </svg>
            </div>
          </div>

          {/* ---- Scrollable content ---- */}
          <div className="flex-1 overflow-hidden px-4 pt-2 pb-1 space-y-3">

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#1E88E5] flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-bold">AK</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-gray-400">Bonjour 👋</p>
                <p className="text-sm font-bold text-[#212121] truncate">Abdoul</p>
              </div>
              <div className="flex gap-1">
                <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg width="12" height="12" fill="none" stroke="#757575" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 16v-4m0-4h.01M4 4h16v16H4z" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg width="12" height="12" fill="none" stroke="#757575" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5-5-5m5 5H9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Ads Carousel (mini) */}
            <div className="w-full h-16 rounded-xl bg-gradient-to-r from-accent-400 to-accent-600 flex items-center px-3 gap-2">
              <div className="text-white">
                <p className="text-[9px] font-semibold leading-tight">🎉 Nouveau cours disponible</p>
                <p className="text-[8px] opacity-80">Code de la route — Module 5</p>
              </div>
              <div className="ml-auto">
                <div className="bg-white/25 rounded-md px-2 py-1 text-[8px] text-white font-semibold">Voir</div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="rounded-2xl p-3 text-white" style={{ background: 'linear-gradient(135deg, #1E88E5, #1565C0)' }}>
              <div className="flex items-center gap-3">
                {/* Circular progress */}
                <div className="relative w-16 h-16 shrink-0">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3"/>
                    <circle cx="18" cy="18" r="14" fill="none" stroke="white" strokeWidth="3"
                            strokeDasharray="88" strokeDashoffset="30" strokeLinecap="round"/>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">66%</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-white/70">Votre progression</p>
                  <p className="text-lg font-bold leading-tight">40 / 60 sujets</p>
                  <p className="text-[10px] text-white/80 mt-0.5">Continuez ainsi ! 💪</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <p className="text-[11px] font-bold text-[#212121] mb-1.5">Actions rapides</p>
              <div className="grid grid-cols-2 gap-2">
                {/* Action 1 */}
                <div className="bg-white rounded-xl p-2.5 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#E3F2FD] flex items-center justify-center mb-1.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1E88E5">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-[9px] text-gray-400">Commencer</p>
                  <p className="text-[11px] font-bold text-[#212121]">un examen</p>
                </div>
                {/* Action 2 */}
                <div className="bg-white rounded-xl p-2.5 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF3E0] flex items-center justify-center mb-1.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF9800">
                      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/>
                    </svg>
                  </div>
                  <p className="text-[9px] text-gray-400">Voir mes</p>
                  <p className="text-[11px] font-bold text-[#212121]">statistiques</p>
                </div>
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-xl p-2.5 border border-[#4CAF50] shadow-sm flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#E8F5E9] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-[#4CAF50]">Éligible à l&apos;examen ! 🎉</p>
                <p className="text-[9px] text-gray-400">Vous pouvez passer l&apos;examen national</p>
              </div>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#BDBDBD"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </div>

            {/* Stats Cards */}
            <div>
              <p className="text-[11px] font-bold text-[#212121] mb-1.5">Vos statistiques</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: '📈', val: '14.5/20', label: 'Moyenne', color: '#1E88E5' },
                  { icon: '📝', val: '40', label: 'Examens', color: '#FF9800' },
                  { icon: '🏆', val: '32', label: 'Réussis', color: '#4CAF50' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl p-2 shadow-sm text-center">
                    <span className="text-sm">{s.icon}</span>
                    <p className="text-[12px] font-bold text-[#212121] mt-0.5">{s.val}</p>
                    <p className="text-[8px] text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Bottom Navigation ---- */}
          <div className="bg-white border-t border-gray-200 px-2 py-1.5 flex justify-around items-center">
            {[
              { label: 'Accueil', active: true, icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1E88E5"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              )},
              { label: 'Cours', active: false, icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="1.5"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )},
              { label: 'Sujets', active: false, icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="1.5"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z" strokeLinecap="round"/></svg>
              )},
              { label: 'Stats', active: false, icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="1.5"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" strokeLinecap="round"/></svg>
              )},
              { label: 'Dossier', active: false, icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="1.5"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" strokeLinecap="round"/></svg>
              )},
            ].map((tab, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5 cursor-default">
                {tab.icon}
                <span className={`text-[8px] font-medium ${tab.active ? 'text-[#1E88E5]' : 'text-gray-400'}`}>
                  {tab.label}
                </span>
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center py-1">
            <div className="w-24 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-400 rounded-2xl opacity-15 blur-2xl"></div>
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-400 rounded-2xl opacity-15 blur-2xl"></div>
    </div>
  )
}