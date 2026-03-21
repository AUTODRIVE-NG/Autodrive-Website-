"use client";

import { motion } from "framer-motion";
import { Megaphone, Calendar, ArrowRight } from "lucide-react";

export type Update = {
  date: string;
  tag: string;
  tagColor: string;
  title: string;
  body: string;
  link?: { label: string; href: string };
};

const updates: Update[] = [
  {
    date: "June 12, 2025",
    tag: "🚀 Launch",
    tagColor: "bg-forest-green/15 text-forest-green border-forest-green/30",
    title: "AutoDrive Beta is Now Live on Android",
    body: "After two years of building, testing, and iterating — our beta is finally live on the Google Play Store. Limited spots available. If you drive in Nigeria, this is for you.",
    link: { label: "Join the Beta", href: "https://forms.gle/G3Z2agiFyVE1cEWj8" },
  },
  {
    date: "May 2025",
    tag: "🤝 Partnership",
    tagColor: "bg-navy/10 text-navy border-navy/20",
    title: "Government Partnership Conversations Begin",
    body: "We've had our first formal meetings with Lagos State Business Development and the Akure Government House. The vision is becoming a reality — AutoDrive wants to be the digital backbone for vehicle document management across Nigeria.",
  },
  {
    date: "March 2025",
    tag: "💳 Product",
    tagColor: "bg-amber/15 text-amber border-amber/30",
    title: "Flutterwave Payment Integration Complete",
    body: "You can now pay for document renewals and services directly in the app. No middlemen, no cash runs. Just tap, pay, and relax — your documents will be handled.",
  },
  {
    date: "January 2025",
    tag: "📱 Product",
    tagColor: "bg-amber/15 text-amber border-amber/30",
    title: "Version 3 Ships — Login, Car Profiles, Document Tracking",
    body: "Our third major version brings login, full car profiles, and document expiry tracking. The vision was becoming real — and our early users confirmed it. The feedback has been incredible.",
  },
  {
    date: "December 25, 2024",
    tag: "🎄 Milestone",
    tagColor: "bg-forest-green/15 text-forest-green border-forest-green/30",
    title: "Version 2 Launched — First Real App, First Real Users",
    body: "A full working app with a Hub, Mechanics section, and navigation. Launched on Christmas Day 2024 because we don't take days off when there's a problem to solve. First real users. First real feedback.",
  },
];

export default function UpdatesSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide max-w-3xl">
        {updates.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <Megaphone className="w-16 h-16 text-navy/20 mx-auto mb-6" />
            <h2 className="font-lora text-2xl font-bold text-navy mb-3">
              Big things are coming.
            </h2>
            <p className="text-navy/60 text-lg">
              We&apos;re heads down building. Check back soon — we&apos;ll be dropping news here first.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-8">
            {updates.map((update, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border ${update.tagColor}`}
                  >
                    {update.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-navy/40 text-sm">
                    <Calendar className="w-4 h-4" />
                    {update.date}
                  </span>
                </div>

                <h2 className="font-lora font-bold text-xl text-navy mb-3 leading-snug">
                  {update.title}
                </h2>
                <p className="text-navy/65 leading-relaxed mb-4">{update.body}</p>

                {update.link && (
                  <a
                    href={update.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-forest-green font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {update.link.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
