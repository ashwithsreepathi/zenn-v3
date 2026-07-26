import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, BarChart3, Gavel, Package, ShoppingCart, Store, Warehouse } from "lucide-react";
import Link from "next/link";

export default function AHLC() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(182,51,46,0.12),_transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <Link
              href="/labs"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-medium transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Labs
            </Link>
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-6 ml-4">
              In Development
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              AHLC
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-400 font-medium mb-4">
              Auction House & Liquidation Center
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl">
              The all-in-one platform for pallet business owners — modernizing
              how liquidation warehouses operate, sell, and scale.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
              The Problem
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Liquidation warehouse owners today juggle a dozen disconnected
              tools: spreadsheets for pallet inventory, separate POS systems for
              retail, manual auction management on external platforms, and
              fragmented online sales channels. Each tool creates data silos,
              duplicate entries, and operational blind spots.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              The pallet liquidation industry is booming — but the technology
              serving it is stuck in 2010. There is no single, purpose-built
              platform that handles the full lifecycle of a liquidation
              business from pallet intake to final sale.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
              One System. Every Operation.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gavel,
                title: "Self-Hosted Auctions",
                desc: "Run your own online auctions without third-party platforms. Set bid parameters, schedule auction events, and manage bidder registration — all within your branded experience.",
              },
              {
                icon: Package,
                title: "Pallet Product Entry",
                desc: "Catalog every item from incoming pallets with barcode scanning, condition grading, and automatic pricing suggestions. Build your product database as pallets are processed.",
              },
              {
                icon: ShoppingCart,
                title: "POS Integration",
                desc: "A fully integrated point-of-sale system for in-store retail transactions. Process sales, apply discounts, manage returns, and track cash flow — all connected to your inventory.",
              },
              {
                icon: Store,
                title: "Retail & Online Sales",
                desc: "Sell across your physical store and online channels simultaneously. Inventory syncs in real-time, preventing overselling and ensuring accurate stock across all platforms.",
              },
              {
                icon: Warehouse,
                title: "Warehouse Management",
                desc: "Track pallet locations, manage receiving docks, organize storage zones, and optimize picking routes. Full visibility into what's in your warehouse and where it is.",
              },
              {
                icon: BarChart3,
                title: "Business Analytics",
                desc: "Unified dashboards showing pallet ROI, auction performance, retail margins, and operational efficiency. Make data-driven decisions with insights that span your entire business.",
              },
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="glass-card p-8 rounded-2xl h-full group hover:border-brand-primary/50 transition-colors duration-500">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
              Built for Pallet Business Owners
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              Whether you run a single-location bin store or a multi-warehouse
              liquidation operation, AHLC scales to fit your business. We&apos;re
              building the platform that the pallet industry deserves — one that
              replaces fragmented tools with a single, powerful system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Liquidation Warehouses", value: "Primary" },
                { label: "Pallet Resellers", value: "Core" },
                { label: "Bin Store Operators", value: "Retail" },
              ].map((target, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="glass-card p-8 rounded-2xl text-center">
                    <p className="text-brand-primary font-mono text-xs uppercase tracking-wider mb-2">
                      {target.value}
                    </p>
                    <h3 className="text-lg font-bold">{target.label}</h3>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-primary/5 border-y border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(182,51,46,0.1),_transparent_70%)]" />
        <FadeIn className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Interested in AHLC?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
            AHLC is currently in active development. If you operate a
            liquidation warehouse or pallet business and want early access or
            partnership opportunities, we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)] inline-block"
          >
            Discuss a Partnership
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
