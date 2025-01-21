import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/privacy" className="text-zinc-400 hover:text-zinc-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-zinc-400 hover:text-zinc-300">
            Terms of Service
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-zinc-400">
            &copy; {new Date().getFullYear()} Golden Gate Hardware. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
