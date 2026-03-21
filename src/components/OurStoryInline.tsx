"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    bio: "The builder. Led Covenant University's Google Developer Program, teaching software engineering on Saturdays. Built every version of AutoDrive from scratch. His fingerprints are on every line of code.",
    photo: "/images/founder-ipinnu.jpg",
  },
  {
    name: "Victor Tadese",
    role: "Co-Founder & CEO",
    bio: "The operator. Academic Director at Afebabalola University for his set. Ensures every moving part of AutoDrive aligns — from logistics to partnerships to the daily heartbeat of the business.",
    photo: "/images/founder-victor.png",
  },
];

export default function OurStoryInline() {
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
          <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">The People Behind It</p>
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-navy mb-4">
            We Didn&apos;t Study This Problem —{" "}
            <span className="text-amber">We Lived It</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            AutoDrive isn&apos;t a corporate product built in a boardroom. It was built by two Nigerian drivers who got tired of the same broken system you&apos;re navigating right now.
          </p>
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
              It started as a single question: <em>why is renewing your car papers in Nigeria still this hard in 2023?</em> Two friends — Ipinnuoluwa and Victor — decided to stop complaining and start building. What began as a Google Sheet and a maintenance tracker form on May 12, 2023, has grown through four full product versions into a fully functional app on the Google Play Store.
            </p>
            <p className="text-lg text-navy/75 leading-relaxed">
              They didn&apos;t come from big tech companies or venture capital. They built this at Covenant University, across late nights, failed prototypes, and two full years of iteration. By December 2024, they had a working app. By 2025, they were in government partnership conversations with Lagos State and Akure — and a growing waitlist of people saying: <em>&ldquo;I&apos;ve been waiting for this.&rdquo;</em>
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
                  <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center text-white font-bold text-lg z-10 mb-4 shadow-lg shadow-amber/25">
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
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-[420px] w-full">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h4 className="font-lora font-bold text-xl text-white">{founder.name}</h4>
                  <p className="text-amber font-semibold text-sm">{founder.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-navy/65 leading-relaxed">{founder.bio}</p>
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
            Supported by{" "}
            <span className="text-white font-semibold">Mrs. Fehintoluwa</span> — Advisor, Government Relations
          </p>
        </motion.div>
      </div>
    </section>
  );
}
