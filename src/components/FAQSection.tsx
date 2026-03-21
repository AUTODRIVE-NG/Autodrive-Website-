"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is AutoDrive safe and official?",
    a: "Yes. We work through licensed agents and official government channels. Your payments are processed via Flutterwave, one of Nigeria's most trusted payment platforms. Your documents are the real deal — no shortcuts.",
  },
  {
    q: "How long does renewal take?",
    a: "Digital copies are delivered instantly once processing is complete. Physical documents are delivered to your door within 24–48 hours in Lagos. No more taking time off work for this.",
  },
  {
    q: "Which documents can AutoDrive renew?",
    a: "Vehicle Licence, Motor Insurance, Roadworthiness Certificate, TIN, and Proof of Ownership — with more coming soon. We're expanding our services regularly based on what our users need.",
  },
  {
    q: "Is the app free?",
    a: "Joining the beta is completely free. You only pay for the documents you renew, plus a small service and delivery fee. No hidden charges, no subscription surprises.",
  },
  {
    q: "I'm not very good with technology — can I still use it?",
    a: "Absolutely. AutoDrive was built specifically to be simple. If you can send a WhatsApp message, you can use AutoDrive. We've tested it with people of all tech levels and ages — it just works.",
  },
  {
    q: "What cities are you in right now?",
    a: "We're currently serving Lagos for physical delivery and processing. Akure is coming very soon, followed by Abuja, Port Harcourt, and other major cities across Nigeria.",
  },
  {
    q: "Can I add more than one car?",
    a: "Yes! Add all your cars — give each one a name, and track all their documents in one place. Whether you have one car or ten, AutoDrive handles them all. It's like a garage in your pocket.",
  },
  {
    q: "What if something goes wrong with my renewal?",
    a: "We have an in-app support system and email support at autodrive.ng@gmail.com. Every order has a reference number and you can request reprocessing or refunds if needed. We stand behind every transaction.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-amber/40 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-lora font-semibold text-lg text-navy pr-4 leading-snug">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-amber" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-6 pt-1 bg-white">
              <p className="text-navy/70 leading-relaxed text-[17px]">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-off-white">
      <div className="container-wide max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-navy mb-4">
            Questions People Ask{" "}
            <span className="text-amber">Us All the Time</span>
          </h2>
          <p className="text-xl text-navy/60">
            No jargon. Just straight answers.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
