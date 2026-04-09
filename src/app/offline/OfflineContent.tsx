"use client"; // This allows the onClick to work

import Link from "next/link";

export default function OfflineContent() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
            <div className="mb-8 w-16 h-16 rounded-full border border-brand-primary/30 bg-brand-primary/10 flex items-center justify-center">
                {/* Your SVG Icon here... */}
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">
                No Connection
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                You&apos;re Offline.
            </h1>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-10">
                It looks like you&apos;ve lost your internet connection. Check your
                network and try again — we&apos;ll be here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => window.location.reload()}
                    className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(182,51,46,0.3)] hover:shadow-[0_0_50px_rgba(182,51,46,0.5)]"
                >
                    Try Again
                </button>
                <Link
                    href="/"
                    className="bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white font-bold px-8 py-4 rounded-full transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}