export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="font-heading text-lg font-800 text-purple">
              MiddleMind
            </span>
            <p className="mt-1 text-sm text-gray-500">
              The Intelligence Layer for Modern Enterprise
            </p>
          </div>
          <div className="flex gap-8">
            {["Products", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href={link === "Contact" ? "mailto:hello@middlemind.ai" : `#${link.toLowerCase()}`}
                className="text-sm text-gray-500 transition-colors hover:text-purple"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-xs text-gray-400">
            2026 MiddleMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
