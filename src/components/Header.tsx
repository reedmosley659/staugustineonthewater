const navLinks = [
  { href: "#experiences", label: "Experiences" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="group flex flex-col">
          <span className="font-display text-xl font-semibold tracking-wide text-white lg:text-2xl">
            St Augustine
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/70 transition-colors group-hover:text-white/90">
            On The Water
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <details className="group relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-sm border border-white/30 text-white transition-colors hover:bg-white/10 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <MenuIcon />
          </summary>
          <nav className="absolute right-0 top-full mt-2 min-w-[10rem] rounded-sm border border-white/20 bg-navy/95 p-2 shadow-xl backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-sm px-4 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
