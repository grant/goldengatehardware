import Link from "next/link";

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
          <NavigationLinks items={headerNavigationLeft} />
        </div>
        <div className="flex items-center gap-x-12">
          <NavigationLinks items={headerNavigationRight} />
        </div>
      </nav>
    </header>
  );
}
