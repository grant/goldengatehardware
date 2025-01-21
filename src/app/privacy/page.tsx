"use client";

import { motion } from "framer-motion";

const PrivacySection = ({
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
    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
    <div className="text-zinc-300 leading-relaxed space-y-4">{children}</div>
  </motion.div>
);

export default function PrivacyPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 sm:py-24">
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Privacy Policy
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-12">
          <PrivacySection title="Information Collection and Use" delay={0.2}>
            <p>
              We collect information that you provide directly to us when using
              our website or interacting with our services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name and contact details</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any additional information you choose to provide</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="Data Security" delay={0.4}>
            <p>
              Your privacy and data security are our top priorities. We maintain
              strict security measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Advanced technical safeguards</li>
              <li>Organizational security protocols</li>
              <li>Protection against unauthorized access</li>
              <li>Safeguards against accidental data loss</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="Third-Party Services" delay={0.6}>
            <p>
              To enhance our website and services, we may utilize third-party
              services for data collection and analysis. Please note:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Each third-party service has its own privacy policy</li>
              <li>We carefully select our service providers</li>
              <li>Data sharing is limited to necessary functions</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="Changes to This Privacy Policy" delay={0.8}>
            <p>
              We may periodically update this Privacy Policy to reflect changes
              in our practices. When we make changes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Updates will be posted on this page</li>
              <li>The effective date will be revised</li>
              <li>Significant changes will be communicated directly</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="Contact Us" delay={1.0}>
            <p>
              Have questions about our Privacy Policy? We&apos;re here to help.
              Reach out to us at{" "}
              <a
                href="mailto:business@goldengatehardware.com"
                className="text-gold hover:text-gold/90 underline"
              >
                business@goldengatehardware.com
              </a>
            </p>
          </PrivacySection>
        </div>
      </div>
    </div>
  );
}
