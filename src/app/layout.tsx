import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zenn Studios | Architects of the Unforgettable",
  description:
    "A boutique agency bridging high-performance software development and cinematic media production.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {/* ── Responsive Navbar ── */}
        <Navbar />

        {/* ── Main Content ── */}
        <main className="pt-20">{children}</main>

        {/* ── Footer ── */}
        <footer className="bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
              {/* Brand */}
              <div className="col-span-2 md:col-span-4 lg:col-span-1">
                <Link href="/" className="flex items-center gap-3 mb-5 group">
                  <div className="w-12 h-12 rounded-xl overflow-hidden relative border border-zinc-800 flex-shrink-0 bg-zinc-900 shadow-md">
                    <Image
                      src="/images/brand/zenn-logo.jpg"
                      alt="Zenn Studios Logo"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-xl font-black tracking-tighter block leading-none">ZENN STUDIOS</span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1 block">Boutique Agency</span>
                  </div>
                </Link>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-4">
                  Architects of the Unforgettable. Home office base serving Brantford, ON & GTA. (10:00 AM – 6:00 PM EST).
                </p>
                <div className="text-xs font-mono text-zinc-400 space-y-1 mb-4">
                  <a href="mailto:ash@zennstudios.com" className="hover:text-brand-primary transition-colors block">ash@zennstudios.com</a>
                </div>
                <div className="flex gap-4 text-xs font-medium">
                  <a href="https://instagram.com/zenn_stuudios_" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
                  <a href="https://ca.linkedin.com/company/zenn-studios" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>

              {/* Company */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-5">Company</p>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/work" className="hover:text-white transition-colors">Our Work</Link></li>
                  <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Capabilities */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-5">Capabilities</p>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><Link href="/capabilities/software" className="hover:text-white transition-colors">Software Dev</Link></li>
                  <li><Link href="/capabilities/branding" className="hover:text-white transition-colors">Branding</Link></li>
                  <li><Link href="/capabilities/editorial" className="hover:text-white transition-colors">Photography & Video</Link></li>
                  <li><Link href="/capabilities/social" className="hover:text-white transition-colors">Social Media</Link></li>
                  <li><Link href="/photography" className="hover:text-brand-primary transition-colors text-brand-primary/70">Zenn Photography →</Link></li>
                </ul>
              </div>

              {/* Labs */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-5">Zenn Labs</p>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><Link href="/labs" className="hover:text-white transition-colors">Overview</Link></li>
                  <li><Link href="/labs/aiors" className="hover:text-white transition-colors">AIORS</Link></li>
                  <li><Link href="/labs/rydeplus" className="hover:text-white transition-colors">Ryde+</Link></li>
                  <li><Link href="/labs/tiffinconnect" className="hover:text-white transition-colors">Tiffin Connect</Link></li>
                </ul>
              </div>

              {/* Work */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-5">Portfolio</p>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><Link href="/work/montax" className="hover:text-white transition-colors">Montax</Link></li>
                  <li><Link href="/work/mycrosscanada" className="hover:text-white transition-colors">MyCrossCanada</Link></li>
                  <li><Link href="/work/blackfridaybins" className="hover:text-white transition-colors">Black Friday Bins</Link></li>
                  <li><Link href="/work" className="hover:text-brand-primary transition-colors text-brand-primary/70">View All →</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
              <p>© {new Date().getFullYear()} Zenn Studios Inc. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
