import Link from "next/link";
import Image from "next/image";

interface HeaderNavigationItem {
  name: string;
  href: string;
}

const headerNavigationLeft: HeaderNavigationItem[] = [
  { name: "Products", href: "/products" },
  { name: "Suppliers", href: "/suppliers" },
];
const headerNavigationRight: HeaderNavigationItem[] = [
  { name: "Contact", href: "/contact" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NavigationLinks({ items }: { items: HeaderNavigationItem[] }) {
  return (
    <div className="flex gap-x-12">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6 text-zinc-300 transition hover:text-gold"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  return (
    <header className="border-b border-zinc-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              className="h-12 w-auto rounded-full"
              src="/goldengatelogo_v2.png"
              alt="GoldenGate Hardware Logo"
              width={48}
              height={48}
            />
            <span className="text-lg font-semibold text-brand-gold">
              GoldenGate Hardware
            </span>
          </Link>
          <div className="flex gap-x-12">
            {headerNavigationLeft.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-zinc-700 transition hover:text-gold"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          {headerNavigationRight.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-zinc-700 transition hover:text-gold"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
