"use client";

import {
  Factory,
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
  Gauge,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CTA } from "@/components/CTA";

const benefits = [
  {
    name: "Market Access",
    description:
      "Direct access to U.S. distributors and retailers, from local businesses to major chains",
    icon: Globe,
  },
  {
    name: "Sales Support",
    description:
      "We handle marketing, sales, and customer relationships, letting you focus on manufacturing",
    icon: TrendingUp,
  },
  {
    name: "Quality Assurance",
    description:
      "We ensure your products meet U.S. market standards and regulations",
    icon: ShieldCheck,
  },
  {
    name: "Customer Insights",
    description:
      "Regular feedback and market intelligence to help optimize your product offerings",
    icon: Users,
  },
  {
    name: "Efficiency",
    description:
      "Streamlined communication and order processing with our experienced team",
    icon: Gauge,
  },
  {
    name: "Growth Partnership",
    description:
      "Long-term partnership focused on mutual growth and market expansion",
    icon: Factory,
  },
];

// Add more logos as suppliers join
const trustedSuppliers: { name: string; logo: string }[] = [
  // Example structure - replace with actual suppliers
  // { name: "Supplier 1", logo: "/api/placeholder/150/80" },
  // { name: "Supplier 2", logo: "/api/placeholder/150/80" },
  // { name: "Supplier 3", logo: "/api/placeholder/150/80" },
  // { name: "Supplier 4", logo: "/api/placeholder/150/80" },
];

export default function SuppliersPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24">
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Partner With Us
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-zinc-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We connect quality manufacturers with buyers across the globe,
              creating lasting partnerships. Join our network of premium
              hardware manufacturers and expand your global reach.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Trusted Suppliers section */}
      <div className="bg-zinc-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <motion.h2
                className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Trusted by Leading Manufacturers
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="https://www.jiameihardware.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="mx-auto mt-8 hover:opacity-80 transition-opacity"
                    src="/logo/jiameihardware.png"
                    alt="Jiamei"
                    width={400}
                    height={200}
                  />
                </a>
              </motion.div>

              <motion.p
                className="mt-4 text-lg leading-8 text-zinc-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We work with quality-focused manufacturers to deliver excellence
                to the global market.
              </motion.p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {trustedSuppliers.map((supplier, index) => (
                <motion.div
                  key={supplier.name}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <Image
                    className="max-h-12 w-full object-contain"
                    src={supplier.logo}
                    alt={supplier.name}
                    width={150}
                    height={80}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gold">
            Why Partner With Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Expand Your U.S. Market Presence
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            We take care of market entry, compliance, and customer
            relationships, allowing you to focus on what you do best -
            manufacturing quality products.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.name}
              className="border border-zinc-200 rounded-2xl p-8 bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                <benefit.icon
                  className="h-6 w-6 text-zinc-9=700"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold leading-8 text-zinc-900">
                  {benefit.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-zinc-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
