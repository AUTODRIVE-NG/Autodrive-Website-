import type { Metadata } from "next";
import UpdatesSection from "@/components/UpdatesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Updates — AutoDrive Nigeria",
  description:
    "The latest news, milestones, and announcements from AutoDrive Nigeria. We build in public — follow our journey here.",
};

export default function UpdatesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
            What&apos;s New
          </p>
          <h1 className="font-lora text-4xl md:text-6xl font-bold leading-tight mb-6">
            AutoDrive{" "}
            <span className="text-amber">Updates</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">
            We build in the open. Every milestone, every launch, every exciting
            development — you&apos;ll hear it here first. Follow our journey as we
            change how Nigeria manages its cars.
          </p>
        </div>
      </section>

      <UpdatesSection />
      <CTASection />
    </>
  );
}
