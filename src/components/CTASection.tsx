"use client";

import { motion } from "framer-motion";
import { Lock, Smartphone, Shield } from "lucide-react";

const BETA_URL = "https://forms.gle/G3Z2agiFyVE1cEWj8";

const trustBadges = [
  { icon: Lock, label: "Secure" },
  { icon: Shield, label: "Nigerian-Built" },
  { icon: Smartphone, label: "Android Beta Live" },
];

export default function CTASection() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container-wide relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber/20 text-amber text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-amber/30">
            <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
            Beta Now Live — Limited Spots
          </div>

          <h2 className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Don&apos;t Get Caught With{" "}
            <span className="text-amber">Expired Papers</span> Again
          </h2>

          <p className="text-white/70 text-xl leading-relaxed mb-10">
            Join the AutoDrive beta today — it&apos;s free, it&apos;s easy, and your
            neighbours are already signing up. Take back your time. Take back your peace of mind.
          </p>

          {/* CTA Button */}
          <motion.a
            href={BETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-amber hover:bg-amber hover:text-navy text-white font-bold text-xl px-10 py-5 rounded-full transition-colors shadow-2xl shadow-amber/30 mb-4"
          >
            <Smartphone className="w-6 h-6" />
            Join the Beta on Android — Free
          </motion.a>

          <p className="text-white/50 text-sm mb-10">
            Beta is currently on Android only. iOS coming very soon.
          </p>

          {/* Trust note */}
          <p className="text-white/60 text-base mb-10">
            No spam. No hidden fees. Just better car ownership.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <Icon className="w-5 h-5 text-amber" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
