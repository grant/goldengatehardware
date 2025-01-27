"use client";

import {
  Building2,
  CheckIcon,
  Globe,
  Languages,
  Scale,
  ShieldCheck,
  Timer,
  XIcon,
} from "lucide-react";

import React from "react";
import { motion } from "framer-motion";
import { CTA } from "@/components/CTA";

const features = [
  {
    name: "Cultural Bridge",
    description: "Seamless communication between US markets and manufacturers",
    icon: Languages,
  },
  {
    name: "Factory-Direct Pricing",
    description: "Competitive pricing with U.S.-based distribution",
    icon: Building2,
  },
  {
    name: "Technical Support",
    description: "Deep construction industry knowledge with U.S. based support",
    icon: ShieldCheck,
  },
  {
    name: "Compliance Assurance",
    description: "Full legal and accounting compliance awareness",
    icon: Scale,
  },
  {
    name: "Supply Chain Optimization",
    description: "Streamlined procurement process and inventory management",
    icon: Globe,
  },
  {
    name: "Fast Response Time",
    description: "Quick turnaround on quotes and technical questions",
    icon: Timer,
  },
];

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12">
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-brand-gold sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Bridge to Quality Hardware
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We simplify the procurement process, ensuring you get the best
              products at competitive prices while maintaining the highest
              quality standards.
            </motion.p>
            <motion.img
              src="/goldengatelogo_v2.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="pt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
        </div>
      </div>

      {/* Value proposition comparison */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h2
            className="text-base font-semibold leading-7 text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The GGH Advantage
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Experience the Difference
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Without GGH */}
            <motion.div
              className="rounded-2xl border border-zinc-800 p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Without GGH
              </h3>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-center gap-3">
                  <XIcon className="h-5 w-5 text-red-500" />
                  Complex communication chains
                </li>
                <li className="flex items-center gap-3">
                  <XIcon className="h-5 w-5 text-red-500" />
                  Multiple middlemen increasing costs
                </li>
                <li className="flex items-center gap-3">
                  <XIcon className="h-5 w-5 text-red-500" />
                  Limited technical support
                </li>
                <li className="flex items-center gap-3">
                  <XIcon className="h-5 w-5 text-red-500" />
                  Uncertain quality standards
                </li>
                <li className="flex items-center gap-3">
                  <XIcon className="h-5 w-5 text-red-500" />
                  Long lead times
                </li>
              </ul>
            </motion.div>

            {/* With GGH */}
            <motion.div
              className="rounded-2xl border border-gold p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gold mb-4">With GGH</h3>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  Direct factory communication
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  Competitive factory-direct pricing
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  Expert U.S. based support
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  Verified quality assurance
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  Optimized delivery times
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                className="border border-zinc-800 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                    <Icon
                      className="h-6 w-6 text-brand-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {feature.name}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <CTA />
    </div>
  );
}
