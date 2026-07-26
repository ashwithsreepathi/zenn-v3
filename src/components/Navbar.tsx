"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Photography", href: "/photography" },
  { name: "Labs", href: "/labs" },
  { name: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener for translucent background contrast
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-2xl border-b border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.9)] py-0"
            : "bg-gradient-to-b from-black/80 to-transparent border-b border-transparent py-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden relative border border-zinc-800 flex-shrink-0 bg-zinc-900 shadow-md">
              <Image
                src="/images/brand/zenn-logo.jpg"
                alt="Zenn Studios Logo"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl font-black tracking-tighter group-hover:text-brand-primary transition-colors">
              ZENN STUDIOS
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/enquiry"
              className="bg-brand-primary hover:bg-brand-primary/80 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-[0_0_20px_rgba(182,51,46,0.25)] hover:shadow-[0_0_30px_rgba(182,51,46,0.5)] flex-shrink-0"
            >
              Start a Project
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5 text-brand-primary" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-zinc-950/98 backdrop-blur-3xl md:hidden px-6 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              {/* Drawer Top Header Bar */}
              <div className="h-20 flex items-center justify-between border-b border-zinc-900 -mx-6 px-6 mb-6 bg-zinc-950 sticky top-0 z-10 backdrop-blur-xl">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl overflow-hidden relative border border-zinc-800 bg-zinc-900 shadow-md">
                    <Image
                      src="/images/brand/zenn-logo.jpg"
                      alt="Zenn Studios"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg font-black tracking-tighter text-white">
                    ZENN STUDIOS
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-primary hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                Navigation Menu
              </span>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-bold tracking-tight flex items-center justify-between py-3 border-b border-zinc-900/80 ${
                          isActive
                            ? "text-brand-primary font-extrabold"
                            : "text-zinc-200 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Mobile Drawer Footer */}
            <div className="pt-6 border-t border-zinc-900 space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Brantford, ON &bull; GTA</span>
                <span>+1 (548) 389-3697</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-bold py-3.5 rounded-2xl flex items-center justify-center text-sm transition-colors"
              >
                Contact Studio &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
