import type { Metadata } from "next";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Features — AutoDrive Nigeria",
  description:
    "Document renewals, smart reminders, fine payments, and doorstep delivery. Everything AutoDrive does to keep you road-legal without the stress.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-soft-green font-semibold tracking-widest uppercase text-sm mb-4">
            Everything You Need
          </p>
          <h1 className="font-lora text-4xl md:text-6xl font-bold leading-tight mb-6">
            What AutoDrive{" "}
            <span className="text-soft-green">Can Do For You</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">
            From renewing your vehicle licence to delivering documents to your
            doorstep — AutoDrive handles every piece of car ownership that used
            to drain your time and energy.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <CTASection />
    </>
  );
}
