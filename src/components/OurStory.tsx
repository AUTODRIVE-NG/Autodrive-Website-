"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase } from "lucide-react";

const timeline = [
  {
    date: "May 12, 2023",
    title: "Version 1",
    description: "Basic car maintenance tracker form (Ipi's Automobile). A Google Sheet, a dream, and a lot of stubbornness.",
  },
  {
    date: "December 25, 2024",
    title: "Version 2",
    description: "Full app with Hub, Mechanics, and navigation. First real product. First real users.",
  },
  {
    date: "January 12, 2025",
    title: "Version 3",
    description: "Login, car profiles, document tracking. The vision was becoming real.",
  },
  {
    date: "June 12, 2025",
    title: "Version 4 — Current MVP",
    description: "Payment integrated, beta launch. Government partnerships. A growing waitlist. AutoDrive is here.",
  },
];

const founders = [
  {
    name: "Ipinnuoluwa Oladipo",
    role: "Co-Founder & CTO",
    icon: Code2,
    bio: "The builder. Led Covenant University's Google Developer Program, teaching software engineering on Saturdays. Built every version of AutoDrive from scratch. His fingerprints are on every line of code.",
    initials: "IO",
    gradient: "from-forest-green to-navy",
  },
  {
    name: "Victor Tadese",
    role: "Co-Founder & CEO",
    icon: Briefcase,
    bio: "The operator. Academic Director at Afebabalola University for his set. Ensures every moving part of AutoDrive aligns — from logistics to partnerships to the daily heartbeat of the business.",
    initials: "VT",
    gradient: "from-navy to-forest-green",
  },
];

export default function OurStory() {
  return (
    <section id="our-story" className="section-padding bg-off-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-navy mb-4">
            Built by Nigerians, For Nigerians —{" "}
            <span className="text-forest-green">With Love and Stubbornness</span>
          </h2>
        </motion.div>

        {/* Story text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <p className="text-lg text-navy/75 leading-relaxed mb-6">
              AutoDrive started as a simple question: <em>why is renewing your car papers in Nigeria still this hard in 2023?</em> Two friends — Ipinnuoluwa and Victor — decided to stop complaining and start building. What began as a Google Sheet and a maintenance tracker form on May 12, 2023, has grown through four full versions of the product into a fully functional app on the Google Play Store.
            </p>
            <p className="text-lg text-navy/75 leading-relaxed">
              They didn&apos;t come from big tech companies or venture capital backgrounds. They built this at Covenant University, across late nights, failed prototypes, and two full years of iteration. By December 2024, they had a working app. By 2025, they had government partnership conversations with Lagos State and Akure, a team of five, and a growing waitlist of people who said: <em>&ldquo;I&apos;ve been waiting for this.&rdquo;</em>
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="font-lora text-2xl font-bold text-navy text-center mb-10">
            The Journey
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200 z-0" />

            <div className="grid md:grid-cols-4 gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center text-white font-bold text-lg z-10 mb-4 shadow-lg shadow-forest-green/25">
                    {i + 1}
                  </div>
                  <p className="text-xs text-amber font-semibold mb-1">{item.date}</p>
                  <h4 className="font-lora font-bold text-navy mb-2">{item.title}</h4>
                  <p className="text-sm text-navy/60 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Founders */}
        <h3 className="font-lora text-2xl font-bold text-navy text-center mb-10">
          Meet the Founders
        </h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex gap-6"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <span className="text-white font-lora font-bold text-2xl">{founder.initials}</span>
              </div>

              <div>
                <h4 className="font-lora font-bold text-xl text-navy">{founder.name}</h4>
                <p className="text-forest-green font-semibold text-sm mb-3">{founder.role}</p>
                <p className="text-navy/65 leading-relaxed text-sm">{founder.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-navy rounded-3xl p-8 text-center"
        >
          <p className="text-white/70 text-lg">
            Powered by a dedicated team:{" "}
            <span className="text-white font-semibold">Temitayo</span> (Technical Lead) ·{" "}
            <span className="text-white font-semibold">Mrs. Fehintoluwa</span> (Advisor, Government Relations) ·{" "}
            <span className="text-white font-semibold">Pius</span> (Marketing)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
