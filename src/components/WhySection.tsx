"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Users } from "lucide-react";

const cards = [
  {
    icon: Zap,
    number: "01",
    title: "Unavoidable — Because You Have No Choice",
    body: "Every driver must renew documents, maintain their car, and stay road-legal. These aren't optional. AutoDrive makes the unavoidable effortless — helping you avoid fines, prevent breakdowns, and skip costly surprises. If you drive, you need us.",
  },
  {
    icon: Layers,
    number: "02",
    title: "The First to Bring It All Together",
    body: "Government portals are confusing. Roadside agents are unreliable. Other apps do bits and pieces. AutoDrive is the first platform to unite renewals, fine payments, document delivery, and car management in one seamless Nigerian-built ecosystem.",
  },
  {
    icon: Users,
    number: "03",
    title: "Built Around People You Already Trust",
    body: "AutoDrive works with Nigeria's existing agent network — the same people your estate, church, and workplace already use. We give them better tools, so you get better service. Community trust, powered by technology.",
  },
];

export default function WhySection() {
  return (
    <section id="why-autodrive" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-navy mb-4">
            Why AutoDrive Is{" "}
            <span className="text-amber">Different</span> From Everything
            Else Out There
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, number, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gradient-to-br from-amber/20 to-amber/5 border-2 border-amber/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  <Icon className="w-6 h-6 text-amber" />
                </div>
                <span className="font-lora font-bold text-4xl text-amber/40">{number}</span>
              </div>
              <h3 className="font-lora font-bold text-xl text-navy mb-4 leading-snug">{title}</h3>
              <p className="text-navy/65 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
