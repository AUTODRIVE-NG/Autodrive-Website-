"use client";

import { motion } from "framer-motion";

const personas = [
  {
    emoji: "👨‍👩‍👧",
    title: "The Family Driver",
    subtitle: "For every parent managing the house car",
    body: "You manage the car for the whole house. AutoDrive reminds you before the kids' school-run car becomes a problem. No more \"Honey, did you renew the vehicle licence?\"",
  },
  {
    emoji: "🏘️",
    title: "Estate Residents",
    subtitle: "Group renewals & bulk discounts",
    body: "Your neighbours are already using it. Group renewals and bulk discounts for estates. One person coordinates, everyone benefits.",
  },
  {
    emoji: "⛪",
    title: "Church Members & Community Groups",
    subtitle: "Trusted community partnerships",
    body: "We partner with trusted communities for on-site renewals, group pricing, and referral rewards. Your pastor might just recommend us.",
  },
  {
    emoji: "🚗",
    title: "Fleet & Business Owners",
    subtitle: "Manage every vehicle in one place",
    body: "Uber drivers, logistics companies, corporate fleets — manage every vehicle from one dashboard with bulk renewal processing. Scale without the stress.",
  },
];

export default function WhoSection() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-white mb-4">
            AutoDrive Is for{" "}
            <span className="text-soft-green">Every Nigerian</span> Who Owns a
            Car
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-5">{persona.emoji}</div>
              <h3 className="font-lora font-bold text-xl text-white mb-1">
                {persona.title}
              </h3>
              <p className="text-soft-green text-sm font-medium mb-4">
                {persona.subtitle}
              </p>
              <p className="text-white/65 leading-relaxed text-sm">
                {persona.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
