"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileX, ArrowDown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    emoji: "😰",
    title: "You forgot your vehicle licence expired — until LASTMA stopped you",
    body: "Over 18–25% of Nigerian drivers are on the road with expired documents at any given time. It's not laziness. It's a broken system.",
  },
  {
    icon: Clock,
    emoji: "🏃",
    title: "You took half a day off work just to queue at a government office",
    body: "Renewing your papers should not cost you a day's work, transport fare, and three hours of standing in the sun.",
  },
  {
    icon: FileX,
    emoji: "📄",
    title: "Your papers are scattered — some at home, some in the car, some you can't even find",
    body: "Between vehicle licence, insurance, roadworthiness, TIN, and more — keeping track of it all is a full-time job.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-navy mb-4">
            Sound Familiar?
          </h2>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto">
            Millions of Nigerian drivers face this every single day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-red-50 border border-red-100 rounded-3xl p-7 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{problem.emoji}</div>
              <h3 className="font-lora font-bold text-lg text-navy mb-3 leading-snug">
                {problem.title}
              </h3>
              <p className="text-navy/65 leading-relaxed">{problem.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow + fix */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <ArrowDown className="w-8 h-8 text-amber animate-bounce" strokeWidth={2.5} />
          <p className="font-lora text-2xl font-semibold text-amber">
            AutoDrive fixes all of this.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
