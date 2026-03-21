"use client";

import { motion } from "framer-motion";
import { Download, Car, Bell, CreditCard } from "lucide-react";
import Image from "next/image";

function IPhoneFrame({ src, alt, cropPosition = "top" }: { src: string; alt: string; cropPosition?: string }) {
  return (
    <div className="mx-auto w-[170px]">
      <div className="relative bg-[#1a1a1a] rounded-[2.6rem] p-[3px] shadow-2xl shadow-black/40">
        <div className="relative bg-black rounded-[2.4rem] overflow-hidden h-[370px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            style={{ objectPosition: cropPosition }}
            sizes="170px"
          />

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-[4px] bg-white/30 rounded-full z-30" />
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Sign Up",
    body: "Create your account in minutes. Add your name, phone number, and your driver's licence details. No complicated forms — we keep it simple.",
    numColor: "text-amber",
    accent: "border-amber/30",
    iconColor: "bg-amber/10 text-amber",
    image: { src: "/images/frame-565.png", alt: "AutoDrive splash screen", cropPosition: "top" },
  },
  {
    number: "02",
    icon: Car,
    title: "Add Your Car(s)",
    body: 'Enter your car details — make, model, year, and plate number. You can add as many cars as you own. Give each one a nickname like "Daddy\'s Jeep" or "The Family Car."',
    numColor: "text-navy",
    accent: "border-navy/20",
    iconColor: "bg-navy/10 text-navy",
    image: { src: "/images/add-car.jpeg", alt: "AutoDrive add car form", cropPosition: "center" },
  },
  {
    number: "03",
    icon: Bell,
    title: "We Track Everything",
    body: "AutoDrive automatically reads your expiry dates and sets up reminders for Vehicle Licence, Insurance, Roadworthiness, TIN and more. You'll never be caught off guard again.",
    numColor: "text-amber",
    accent: "border-amber/30",
    iconColor: "bg-amber/10 text-amber",
    image: { src: "/images/frame-571.png", alt: "Car profile showing document expiry status", cropPosition: "bottom" },
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Renew With One Tap",
    body: "When something is due, you get a reminder. Tap to renew. Pay securely in the app. We handle the rest — printing, processing, and delivery straight to your doorstep in Lagos within 24–48 hours.",
    numColor: "text-amber",
    accent: "border-amber/40",
    iconColor: "bg-amber/20 text-amber",
    image: { src: "/images/frame-567.png", alt: "Renewal order with live tracking", cropPosition: "top" },
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-off-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-navy mb-4">
            Getting Started Is as Easy as{" "}
            <span className="text-amber">Sending a WhatsApp</span>
          </h2>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto">
            We made AutoDrive simple enough for anyone in the family to use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[200px] left-[calc(100%_-_16px)] w-8 h-0.5 bg-gray-200 z-10" />
              )}

              <div className={`bg-white rounded-3xl border-2 ${step.accent} hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden`}>
                <div className="pt-8 pb-4 px-4 bg-gray-50 flex justify-center">
                  <IPhoneFrame {...step.image} />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className={`font-lora font-bold text-7xl leading-none mb-4 ${step.numColor}`}>
                    {step.number}
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${step.iconColor}`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-lora font-bold text-xl text-navy mb-3">{step.title}</h3>
                  <p className="text-navy/65 leading-relaxed text-[15px]">{step.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
