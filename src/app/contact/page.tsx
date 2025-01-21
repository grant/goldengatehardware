export default function ContactPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-12">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Get in Touch
            </h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>
                We&apos;re here to help with all your hardware needs. Reach out
                to us through any of the following channels:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:business@goldengatehardware.com"
                    className="text-gold hover:text-gold/90 underline"
                  >
                    business@goldengatehardware.com
                  </a>
                </li>
                <li>Business Hours: Monday - Friday, 9:00 AM - 5:00 PM PST</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
