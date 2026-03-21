"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Users } from "lucide-react";
import Image from "next/image";

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
          {/* Card 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-gradient-to-br from-amber/20 to-amber/5 border-2 border-amber/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber" />
              </div>
              <span className="font-lora font-bold text-4xl text-gray-200">01</span>
            </div>
            <h3 className="font-lora font-bold text-xl text-navy mb-4 leading-snug">
              Unavoidable — Because You Have No Choice
            </h3>
            <p className="text-navy/65 leading-relaxed">
              Every driver must renew documents, maintain their car, and stay road-legal. These aren&apos;t optional. AutoDrive makes the unavoidable effortless — helping you avoid fines, prevent breakdowns, and skip costly surprises. If you drive, you need us.
            </p>
          </motion.div>

          {/* Card 02 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-gradient-to-br from-amber/20 to-amber/5 border-2 border-amber/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <Layers className="w-6 h-6 text-amber" />
              </div>
              <span className="font-lora font-bold text-4xl text-gray-200">02</span>
            </div>
            <h3 className="font-lora font-bold text-xl text-navy mb-4 leading-snug">
              The First to Bring It All Together
            </h3>
            <p className="text-navy/65 leading-relaxed">
              Government portals are confusing. Roadside agents are unreliable. Other apps do bits and pieces. AutoDrive is the first platform to unite renewals, fine payments, document delivery, and car management in one seamless Nigerian-built ecosystem.
            </p>
          </motion.div>

          {/* Card 03 — with agent screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-navy/20 to-navy/5 border-2 border-navy/20 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Agent screenshot — cropped to show name + verified badge */}
            <div className="relative h-44 overflow-hidden">
              <Image
                src="/images/frame-576.png"
                alt="AutoDrive verified agent profile — Joanne Temitola"
                fill
                className="object-cover"
                style={{ objectPosition: "top" }}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Gradient fade at bottom so it blends into the card */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/10" />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  <Users className="w-6 h-6 text-navy" />
                </div>
                <span className="font-lora font-bold text-4xl text-gray-200">03</span>
              </div>
              <h3 className="font-lora font-bold text-xl text-navy mb-4 leading-snug">
                Built Around People You Already Trust
              </h3>
              <p className="text-navy/65 leading-relaxed">
                AutoDrive works with Nigeria&apos;s existing agent network — the same people your estate, church, and workplace already use. We give them better tools, so you get better service. Community trust, powered by technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
