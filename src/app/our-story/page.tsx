import type { Metadata } from "next";
import OurStory from "@/components/OurStory";
import TractionSection from "@/components/TractionSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Story — AutoDrive Nigeria",
  description:
    "Built at Covenant University by two friends who got tired of the broken system. The story of AutoDrive — from a Google Sheet in 2023 to a live product in 2025.",
};

export default function OurStoryPage() {
  return (
    <>
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-soft-green font-semibold tracking-widest uppercase text-sm mb-4">
            Where It All Started
          </p>
          <h1 className="font-lora text-4xl md:text-6xl font-bold leading-tight mb-6">
            Our Story —{" "}
            <span className="text-soft-green">Built With Love and Stubbornness</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">
            Two friends at Covenant University. A problem every Nigerian driver
            knows. Two years of building, failing, rebuilding — and a product
            that&apos;s now live and growing.
          </p>
        </div>
      </section>

      <OurStory />
      <TractionSection />
      <CTASection />
    </>
  );
}
