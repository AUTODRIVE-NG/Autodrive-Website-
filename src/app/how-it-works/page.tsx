import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How It Works — AutoDrive Nigeria",
  description:
    "Four simple steps to never worry about expired car documents again. Download, add your car, let AutoDrive track everything, and renew with one tap.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-soft-green font-semibold tracking-widest uppercase text-sm mb-4">
            Simple by Design
          </p>
          <h1 className="font-lora text-4xl md:text-6xl font-bold leading-tight mb-6">
            How AutoDrive{" "}
            <span className="text-soft-green">Works</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">
            We built AutoDrive for every Nigerian driver — not just the tech-savvy ones.
            If you can send a WhatsApp message, you can use AutoDrive.
          </p>
        </div>
      </section>

      <HowItWorks />
      <CTASection />
    </>
  );
}
