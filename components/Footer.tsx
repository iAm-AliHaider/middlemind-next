export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="10" width="11" height="11" rx="2" transform="rotate(-45 2 10)" fill="#a78bfa"/>
                <rect x="10" y="10" width="11" height="11" rx="2" transform="rotate(-45 10 10)" fill="#a78bfa" fillOpacity="0.45"/>
              </svg>
              <span className="font-heading text-base text-white">
                <span className="font-light">middle</span><span className="font-extrabold">mind</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">AI Product Studio</p>
            <p className="mt-1 text-xs text-gray-600">hello@middlemind.ai</p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Products</p>
              {["Taliq", "HisabAI", "Mizan", "Finvox", "Haris"].map(p => (
                <p key={p} className="text-sm text-gray-400 hover:text-white transition-colors mt-1.5 cursor-pointer">{p}</p>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Studio</p>
              {[["Voice AI", "#voice"], ["Services", "#services"], ["Technology", "#technology"], ["Contact", "mailto:hello@middlemind.ai"]].map(([label, href]) => (
                <a key={label} href={href} className="block text-sm text-gray-400 hover:text-white transition-colors mt-1.5">{label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; 2026 MiddleMind. All rights reserved.</p>
          <p className="text-xs text-gray-600">Building what others can&apos;t.</p>
        </div>
      </div>
    </footer>
  );
}
