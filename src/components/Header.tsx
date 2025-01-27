import Link from "next/link";

const navigationLeft = [{ name: "Suppliers", href: "/suppliers" }];

const navigationRight = [{ name: "Contact", href: "/contact" }];

export function Header() {
  return (
    <header className="border-b border-zinc-800">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gold">
              GoldenGate Hardware
            </span>
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigationLeft.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-zinc-300 transition hover:text-gold"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigationRight.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-zinc-300 transition hover:text-gold"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
