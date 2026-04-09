import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
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
        {/* ── Navbar ── */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
            <Link
              href="/"
              className="text-xl font-black tracking-tighter flex-shrink-0 hover:text-brand-primary transition-colors"
            >
              ZENN STUDIOS
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/work" className="hover:text-white transition-colors">Work</Link>
              <Link href="/capabilities" className="hover:text-white transition-colors">Capabilities</Link>
              <Link href="/labs" className="hover:text-white transition-colors">Labs</Link>
              <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
            </div>

            <Link
              href="/enquiry"
              className="bg-brand-primary hover:bg-brand-primary/80 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(182,51,46,0.2)] hover:shadow-[0_0_30px_rgba(182,51,46,0.4)] flex-shrink-0"
            >
              Start a Project
            </Link>
          </div>
        </nav>

        {/* ── Main Content ── */}
        <main className="pt-20">{children}</main>

        {/* ── Footer ── */}
        <footer className="bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
              {/* Brand */}
              <div className="col-span-2 md:col-span-4 lg:col-span-1">
                <Link href="/" className="text-2xl font-black tracking-tighter block mb-4">
                  ZENN<br />STUDIOS
                </Link>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Architects of the Unforgettable. Boutique agency at the intersection of technology and creativity.
                </p>
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
