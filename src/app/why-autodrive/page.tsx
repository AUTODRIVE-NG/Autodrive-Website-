import type { Metadata } from "next";
import WhySection from "@/components/WhySection";
import WhoSection from "@/components/WhoSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why AutoDrive — AutoDrive Nigeria",
  description:
    "Why AutoDrive is different from everything else out there, and who it was built for. Nigeria's first all-in-one car document management platform.",
};

export default function WhyAutoDrivePage() {
  return (
    <>
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-soft-green font-semibold tracking-widest uppercase text-sm mb-4">
            The Case for AutoDrive
          </p>
          <h1 className="font-lora text-4xl md:text-6xl font-bold leading-tight mb-6">
            Why AutoDrive Is{" "}
            <span className="text-soft-green">Different</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">
            Government portals are confusing. Roadside agents are unreliable.
            Other apps do bits and pieces. Here&apos;s why AutoDrive is the only
            platform that brings it all together — and why that matters for you.
          </p>
        </div>
      </section>

      <WhySection />
      <WhoSection />
      <CTASection />
    </>
  );
}
