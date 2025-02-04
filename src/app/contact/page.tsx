"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 sm:py-24">
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-black sm:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-12">
          <section className="mb-8">
            <motion.h2
              className="text-2xl font-semibold text-black mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in Touch
            </motion.h2>
            <motion.div
              className="text-zinc-600 leading-relaxed space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
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
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
