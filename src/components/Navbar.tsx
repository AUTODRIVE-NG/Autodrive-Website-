"use client";

import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Why AutoDrive", href: "/why-autodrive" },
  { label: "Our Story", href: "/our-story" },
  { label: "Updates", href: "/updates" },
  { label: "FAQ", href: "/faq" },
];

const BETA_URL = "https://forms.gle/G3Z2agiFyVE1cEWj8";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      {/* Announcement ticker */}
      <div className="bg-forest-green text-white text-sm py-2 overflow-hidden">
        <div className="ticker-content inline-block px-4">
          🟢 Beta is LIVE on Android — Limited slots available. Join now before it fills up!
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          🟢 Beta is LIVE on Android — Limited slots available. Join now before it fills up!
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md py-3" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-forest-green flex items-center justify-center group-hover:bg-navy transition-colors">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="font-lora font-bold text-xl text-navy tracking-tight">
              AutoDrive
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-5 text-[14px] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors whitespace-nowrap ${
                  isActive(link.href)
                    ? "text-forest-green font-semibold"
                    : "text-navy/70 hover:text-forest-green"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-forest-green hover:bg-navy text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors whitespace-nowrap"
            >
              Join the Beta — It&apos;s Free
            </a>
            <button
              className="xl:hidden p-2 text-navy"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="xl:hidden fixed inset-0 top-[calc(var(--nav-height,112px))] bg-white z-40 flex flex-col px-6 pt-8 pb-10 gap-1 overflow-y-auto"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-medium border-b border-gray-100 py-4 ${
                    isActive(link.href) ? "text-forest-green font-semibold" : "text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-forest-green text-white text-center font-semibold px-6 py-4 rounded-full text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Join the Beta — It&apos;s Free
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
