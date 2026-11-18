export function Trophy() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(214,181,109,0.28),transparent_68%)] blur-2xl" />
      <div className="spin-slow absolute top-[12%] left-1/2 size-[78%] -translate-x-1/2 rounded-full border border-gold/30" />
      <div className="spin-reverse absolute top-[20%] left-1/2 size-[62%] -translate-x-1/2 rounded-full border border-dashed border-gold/25" />
      <div className="absolute top-[8%] right-[10%] size-16 border-t border-r border-gold/40" />
      <div className="absolute bottom-[16%] left-[8%] size-16 border-b border-l border-gold/40" />

      <div className="float-slow relative z-10 flex h-full items-center justify-center">
        <svg viewBox="0 0 360 480" className="h-[92%] w-auto drop-shadow-[0_30px_40px_rgba(214,181,109,0.18)]">
          <defs>
            <linearGradient id="gold-body" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff6d8" />
              <stop offset="28%" stopColor="#f0d48a" />
              <stop offset="52%" stopColor="#b8893d" />
              <stop offset="74%" stopColor="#f6e3ae" />
              <stop offset="100%" stopColor="#8d692e" />
            </linearGradient>
            <linearGradient id="gold-rim" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fffaf0" />
              <stop offset="100%" stopColor="#c49a4e" />
            </linearGradient>
            <linearGradient id="gold-dark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e7c98a" />
              <stop offset="100%" stopColor="#6e5222" />
            </linearGradient>
            <radialGradient id="cup-light" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#fff8e4" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#e8c87a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6d5120" stopOpacity="0.15" />
            </radialGradient>
          </defs>

          <ellipse cx="180" cy="438" rx="92" ry="14" fill="#d6b56d" opacity="0.18" />

          <path
            d="M92 168c-28 6-48 28-44 58 4 32 32 48 62 42"
            fill="none"
            stroke="url(#gold-body)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M268 168c28 6 48 28 44 58-4 32-32 48-62 42"
            fill="none"
            stroke="url(#gold-body)"
            strokeWidth="14"
            strokeLinecap="round"
          />

          <path
            d="M108 150h144c8 0 16 8 16 18v8c0 78-28 132-88 156-60-24-88-78-88-156v-8c0-10 8-18 16-18z"
            fill="url(#gold-body)"
          />
          <path
            d="M108 150h144c8 0 16 8 16 18v8c0 78-28 132-88 156-60-24-88-78-88-156v-8c0-10 8-18 16-18z"
            fill="url(#cup-light)"
          />
          <rect x="104" y="138" width="152" height="22" rx="8" fill="url(#gold-rim)" />
          <path d="M150 168h18l-6 78h-8z" fill="#fff6dd" opacity="0.35" />

          <path d="M164 330h32l10 28h-52z" fill="url(#gold-dark)" />
          <rect x="126" y="354" width="108" height="14" rx="4" fill="url(#gold-rim)" />
          <path d="M112 370h136l16 28H96z" fill="url(#gold-body)" />
          <rect x="86" y="396" width="188" height="18" rx="6" fill="url(#gold-rim)" />
          <rect x="74" y="412" width="212" height="16" rx="5" fill="url(#gold-dark)" />

          <path
            d="M180 78l8 18 20 2-15 13 5 19-18-10-18 10 5-19-15-13 20-2z"
            fill="url(#gold-rim)"
          />
        </svg>
        <div className="pointer-events-none absolute inset-x-[22%] top-[28%] h-24 overflow-hidden opacity-70">
          <div className="shine h-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}
