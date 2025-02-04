"use client";

import { motion } from "framer-motion";

const TermsSection = ({
  title,
  children,
  delay,
}: {
  title: string;
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <h2 className="text-2xl font-semibold text-zinc-700 mb-4">{title}</h2>
    <div className="text-zinc-800 leading-relaxed space-y-4">{children}</div>
  </motion.div>
);

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 sm:py-24">
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-zinc-700 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Terms of Service
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-12">
          <TermsSection title="Agreement to Terms" delay={0.2}>
            <p>
              By accessing and using our website, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do
              not use our services.
            </p>
          </TermsSection>

          <TermsSection title="Use of Services" delay={0.4}>
            <p>Our services are provided under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You must use our services in accordance with applicable laws
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account
              </li>
              <li>
                You agree not to misuse or attempt to disrupt our services
              </li>
              <li>
                We reserve the right to modify or terminate services at any time
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="Intellectual Property" delay={0.6}>
            <p>
              All content on this website is protected by intellectual property
              rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All trademarks and logos are property of GoldenGate Hardware
              </li>
              <li>Content may not be reproduced without permission</li>
              <li>
                You may not use our intellectual property for commercial
                purposes
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="Limitation of Liability" delay={0.8}>
            <p>
              GoldenGate Hardware and its affiliates shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect or consequential damages</li>
              <li>Loss of profits or business opportunities</li>
              <li>Technical issues or service interruptions</li>
              <li>Any damages arising from use of our services</li>
            </ul>
          </TermsSection>

          <TermsSection title="Contact Information" delay={1.0}>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:business@goldengatehardware.com"
                className="text-gold hover:text-gold/90 underline"
              >
                business@goldengatehardware.com
              </a>
            </p>
          </TermsSection>
        </div>
      </div>
    </div>
  );
}
