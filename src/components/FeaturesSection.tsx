"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Bell,
  Package,
  AlertCircle,
  Smartphone,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";

// PhoneFrame wraps a screenshot in a rounded phone-like container.
// `cropPosition` uses CSS object-position to show a specific part of the image.
function PhoneFrame({
  src,
  alt,
  cropPosition = "top",
  height = "h-[480px]",
}: {
  src: string;
  alt: string;
  cropPosition?: string;
  height?: string;
}) {
  return (
    <div className={`relative ${height} w-full max-w-[280px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: cropPosition }}
        sizes="280px"
      />
    </div>
  );
}

const features = [
  {
    icon: FileCheck,
    title: "Seamless Document Renewal",
    tagline: "Renew your car papers with one tap — no stress, no queues, just results.",
    details: [
      "Covers: Vehicle Licence, Motor Insurance, Roadworthiness Certificate, TIN, Proof of Ownership",
      "We work through a trusted network of licensed agents",
      "Payments processed securely via Flutterwave",
    ],
    // Cart showing document selection per car (Vehicle License + Road Worthiness)
    image: "/images/frame-570.png",
    imageAlt: "AutoDrive renewal cart — select documents per car",
    cropPosition: "top",
    flip: false,
  },
  {
    icon: Bell,
    title: "Smart Reminders & AutoRenew",
    tagline:
      "We remind you 90, 60, and 30 days before anything expires. With AutoRenew, we handle it automatically — so you don't have to think about it.",
    details: [
      "Reminders via push notification, SMS, and email",
      "AutoRenew coming soon — set it and forget it",
      "90, 60, and 30-day advance alerts for every document",
    ],
    // Car profile showing document expiry dates (some expired, some expiring soon)
    image: "/images/frame-571.png",
    imageAlt: "AutoDrive car profile showing document expiry status",
    // Crop to the documents grid — the bottom portion of the screen
    cropPosition: "60% bottom",
    flip: true,
  },
  {
    icon: Package,
    title: "Real-Time Order Tracking",
    tagline:
      "Once you place an order, watch it move from request to your doorstep — step by step.",
    details: [
      "Live order status: Order Placed → Agent Confirmed → Papers Printed → Out for Delivery → Delivered",
      "Order reference numbers for every transaction",
      "Estimated delivery window shown in real-time",
    ],
    // Full delivery timeline screen — the clearest view of the tracking flow
    image: "/images/frame-568.png",
    imageAlt: "AutoDrive order tracking timeline — from order to delivery",
    cropPosition: "top",
    flip: false,
  },
  {
    icon: AlertCircle,
    title: "Manage & Pay Fines",
    tagline:
      "Outstanding LASTMA or VIO fine? Don't let it grow. Pay it directly in the app — no more confusion about where to go or how much to pay.",
    details: [
      "Track fines linked to your vehicle",
      "Pay securely without visiting any office",
      "Stay compliant and stress-free",
    ],
    // Ongoing order screen — shows the real renewal flow
    image: "/images/frame-567.png",
    imageAlt: "AutoDrive renewal orders screen",
    cropPosition: "top",
    flip: true,
  },
  {
    icon: Smartphone,
    title: "Instant Softcopy + Doorstep Hardcopy",
    tagline:
      "The moment your renewal is processed, we send the softcopy to your phone. Need the physical paper? We deliver it to your home or office — no queues, no errands.",
    details: [
      "Softcopy: instant digital delivery to your phone",
      "Hardcopy: doorstep delivery within 24–48hrs in Lagos",
      "Coming soon: Akure and other urban centres",
    ],
    // Completed orders screen — shows "View Document" for delivered orders
    image: "/images/frame-569.png",
    imageAlt: "AutoDrive completed renewal order — view document",
    cropPosition: "top",
    flip: false,
  },
  {
    icon: LayoutDashboard,
    title: "Your Digital Garage",
    tagline:
      "Add all your cars in one place. Give them names. See every detail at a glance — from documents to history. Made for families with multiple cars and fleet managers alike.",
    details: [
      "Unlimited cars per account",
      "Each car has its own profile with nickname, photo, and document dashboard",
      "Inspired by real users: \"Tope's Baby\" — Lexus RX 350",
    ],
    // Home screen showing garage image + driver's licence + My Cars list
    image: "/images/frame-577.png",
    imageAlt: "AutoDrive home screen — your digital garage with all your cars",
    cropPosition: "top",
    flip: true,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-off-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-navy mb-4">
            Everything Your Car Needs.{" "}
            <span className="text-forest-green">All in One Place.</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text */}
              <div className={feature.flip ? "lg:order-2" : "lg:order-1"}>
                <div className="inline-flex items-center gap-3 bg-forest-green/10 text-forest-green px-4 py-2 rounded-full mb-5">
                  <feature.icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">Feature 0{i + 1}</span>
                </div>
                <h3 className="font-lora text-3xl md:text-4xl font-bold text-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-xl text-navy/70 leading-relaxed mb-6 italic">
                  &ldquo;{feature.tagline}&rdquo;
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-navy/70">
                      <span className="w-5 h-5 rounded-full bg-forest-green/20 text-forest-green flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real screenshot */}
              <div className={`${feature.flip ? "lg:order-1" : "lg:order-2"} flex justify-center`}>
                <PhoneFrame
                  src={feature.image}
                  alt={feature.imageAlt}
                  cropPosition={feature.cropPosition}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
