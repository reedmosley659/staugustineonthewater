import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-dark bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-navy">
              St Augustine On The Water
            </p>
            <p className="mt-1 text-sm text-navy/60">
              Water experiences in St. Augustine, Florida
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link
              href="/privacy-policy"
              className="text-sm text-navy/70 transition-colors hover:text-teal"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-navy/70 transition-colors hover:text-teal"
            >
              Terms
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-navy/70 transition-colors hover:text-teal"
            >
              Contact
            </Link>
          </nav>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-navy/45">
          St Augustine On The Water may earn a commission when visitors book
          experiences through links on this site.
        </p>
        <p className="mt-6 text-center text-xs text-navy/50">
          &copy; {year} St Augustine On The Water. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
