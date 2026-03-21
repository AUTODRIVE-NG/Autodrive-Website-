"use client";

import { Phone, Mail, MapPin, Instagram, Car } from "lucide-react";
import Link from "next/link";

const BETA_URL = "https://forms.gle/G3Z2agiFyVE1cEWj8";

const footerLinks = {
  Explore: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Features", href: "/features" },
    { label: "Why AutoDrive", href: "/why-autodrive" },
    { label: "Our Story", href: "/our-story" },
    { label: "Updates", href: "/updates" },
    { label: "FAQ", href: "/faq" },
  ],
  Download: [
    { label: "Android Beta (Google Play)", href: BETA_URL, external: true },
    { label: "iOS — Coming Soon", href: "#", disabled: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="section-padding border-b border-white/10">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="font-lora font-bold text-2xl">AutoDrive</span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Stay on the Road. We Keep You Ready.
              </p>
              <p className="text-white/40 text-xs">
                Your Garage, Fully Digital.
              </p>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-1">
              <h4 className="font-lora font-bold text-lg mb-5">Get in Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:08133754181"
                    className="flex items-start gap-3 text-white/70 hover:text-soft-green transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>08133754181</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:autodrive.ng@gmail.com"
                    className="flex items-start gap-3 text-white/70 hover:text-soft-green transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>autodrive.ng@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-white/70">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>7 Oyedele Oguniyi Street, Lagos State, Nigeria</span>
                  </div>
                </li>
                <li>
                  <a
                    href="https://instagram.com/_autodriveng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-soft-green transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@_autodriveng</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-lora font-bold text-lg mb-5">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => {
                    const isExternal = "external" in link && link.external;
                    const isDisabled = "disabled" in link && link.disabled;
                    const className = `text-sm transition-colors ${
                      isDisabled
                        ? "text-white/30 cursor-not-allowed"
                        : "text-white/65 hover:text-soft-green"
                    }`;

                    if (isExternal) {
                      return (
                        <li key={link.label}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                            {link.label}
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={link.label}>
                        <Link href={link.href} className={className}>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 px-4 md:px-8">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm text-center md:text-left">
            © 2025 AutoDrive Automobile Services Ltd. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Built in Nigeria 🇳🇬 for every Nigerian driver.
          </p>
        </div>
      </div>
    </footer>
  );
}
