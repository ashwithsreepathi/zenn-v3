import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're Offline | Zenn Studios",
  description: "It looks like you've lost your connection.",
};

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      <div className="mb-8 w-16 h-16 rounded-full border border-brand-primary/30 bg-brand-primary/10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 text-brand-primary"
          aria-hidden="true"
        >
          <line x1="1" y1="1" x2="23" y2="23" />
          <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
          <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
          <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
          <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <circle cx="12" cy="20" r="1" fill="currentColor" />
        </svg>
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
