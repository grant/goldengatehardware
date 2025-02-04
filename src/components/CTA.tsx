import { motion } from "framer-motion";

export const CTA = () => (
  <div className="bg-zinc-900/50">
    <div className="px-6 py-32 sm:px-6 sm:py-40 lg:px-8">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Looking for Quality Fasteners?
        </motion.h2>
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-zinc-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We offer a wide range of premium fasteners including stainless steel
          screws, tapping screws, and decking screws - all with factory-direct
          pricing and expert U.S.-based support.
        </motion.p>
        <motion.div
          className="mt-12 flex items-center justify-center gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="/contact"
            className="rounded-md bg-brand-gold px-8 py-4 text-lg font-semibold text-black shadow-lg transition-all duration-200 transform hover:bg-brand-goldLight uppercase"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
);
