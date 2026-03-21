"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";

const achieved = [
  "Fully functional MVP — live on Google Play Store (closed beta)",
  "Softcopy delivery working and tested",
  "Logistics partnerships in motion for physical Lagos delivery",
  "Government meetings: Lagos State Business Development + Akure Government House",
  "Flutterwave payment integration complete",
  "2nd round of user testing underway",
];

const coming = [
  "Apple App Store launch coming soon",
  "AutoRenew (automatic renewals) in development",
  "24–48hr physical delivery rolling out across Lagos",
];

const marketStats = [
  { value: "13M+", label: "Registered vehicles in Nigeria" },
  { value: "1M+", label: "Annual renewals in Lagos alone" },
  { value: "18–25%", label: "Drivers currently on expired papers" },
  { value: "10,000", label: "Target users — beta launch" },
];

export default function TractionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-navy mb-4">
            We&apos;re Not Just an Idea —{" "}
            <span className="text-forest-green">We&apos;re Already Moving</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Achieved */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 border border-green-100 rounded-3xl p-8"
          >
            <h3 className="font-lora font-bold text-xl text-navy mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-forest-green" />
              What We&apos;ve Built
            </h3>
            <ul className="space-y-4">
              {achieved.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-forest-green text-lg flex-shrink-0">✅</span>
                  <span className="text-navy/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coming soon */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-amber/5 border border-amber/20 rounded-3xl p-8"
          >
            <h3 className="font-lora font-bold text-xl text-navy mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-amber" />
              What&apos;s Coming
            </h3>
            <ul className="space-y-4 mb-8">
              {coming.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber text-lg flex-shrink-0">🔜</span>
                  <span className="text-navy/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-amber/10 rounded-2xl p-4">
              <p className="text-sm text-amber font-semibold text-center">
                💰 ₦50K+ projected early revenue · Growing waitlist
              </p>
            </div>
          </motion.div>
        </div>

        {/* Market stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map(({ value, label }, i) => (
              <div
                key={i}
                className="bg-navy rounded-3xl p-6 text-center hover:bg-navy/90 transition-colors"
              >
                <p className="font-lora font-bold text-3xl text-amber mb-2">{value}</p>
                <p className="text-white/65 text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
