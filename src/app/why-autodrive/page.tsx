import type { Metadata } from "next";
import WhySection from "@/components/WhySection";
import OurStoryInline from "@/components/OurStoryInline";
import WhoSection from "@/components/WhoSection";
import TractionSection from "@/components/TractionSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why AutoDrive — AutoDrive Nigeria",
  description:
    "Why AutoDrive is different, who it's built for, and the story behind Nigeria's first centralized car document management platform.",
};

export default function WhyAutoDrivePage() {
  return (
    <>
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
            The Full Picture
          </p>
          <h1 className="font-lora text-4xl md:text-6xl font-bold leading-tight mb-6">
            Why AutoDrive —{" "}
            <span className="text-amber">And Why It Matters</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">
            Every Nigerian driver knows the frustration. Queues, expired papers, unreliable agents.
            AutoDrive exists because two people who lived that frustration decided to fix it.
            Here&apos;s what makes us different — and who made it happen.
          </p>
        </div>
      </section>

      <WhySection />
      <OurStoryInline />
      <WhoSection />
      <TractionSection />
      <CTASection />
    </>
  );
}
