import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const sections = [
  {
    title: "1. Information We Collect",
    body: `We collect information you provide directly to us when you submit forms, send enquiries, or communicate with our team. This includes:
    
• Personal identification information (name, email address, phone number)
• Company or business information provided for project scoping purposes
• Usage data collected automatically when you visit our website (IP address, browser type, pages visited, time spent on pages)
• Cookies and similar tracking technologies as described in our Cookie Policy section below.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use information collected about you to:
    
• Respond to your enquiries and project submissions
• Provide, maintain, and improve our services
• Send you technical notices, updates, and administrative messages related to active engagements
• Communicate with you about projects, promotions, and events (with your consent where required)
• Monitor and analyze trends and usage to improve your experience
• Detect, investigate, and prevent fraudulent transactions and other illegal activities`,
  },
  {
    title: "3. Information Sharing",
    body: `We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:

• With trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements
• When we believe disclosure is necessary to comply with laws, regulations, or legal processes
• To protect the rights, property, and safety of Zenn Studios, our clients, or the public
• In connection with a business transfer, merger, or acquisition`,
  },
  {
    title: "4. Data Security",
    body: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted HTTPS transmission, restricted access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "5. Cookies & Tracking",
    body: `Our website uses cookies—small data files placed on your device—to improve your experience. We use:

• Strictly necessary cookies for core website functionality
• Analytics cookies to understand how visitors interact with our site (via anonymized data)
• Preference cookies to remember your settings

You can control cookies through your browser settings. Disabling cookies may affect certain features of our website.`,
  },
  {
    title: "6. Your Rights (PIPEDA & GDPR)",
    body: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

• The right to access the personal data we hold about you
• The right to request correction of inaccurate information
• The right to request deletion of your personal data
• The right to withdraw consent at any time where processing is based on consent
• The right to data portability

To exercise any of these rights, please contact us at privacy@zennstudios.com. We will respond within 30 days.`,
  },
  {
    title: "7. Third-Party Links",
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "8. Changes to this Policy",
    body: `We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.`,
  },
  {
    title: "9. Contact Us",
    body: `If you have any questions about this Privacy Policy or our data practices, please contact:

Zenn Studios Legal & Privacy
123 Innovation Drive, Vancouver, BC V6B 1A1, Canada
Email: privacy@zennstudios.com`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <section className="pt-40 pb-20 border-b border-zinc-900 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
            <p className="text-zinc-400">
              Last Updated: <span className="text-zinc-300 font-semibold">January 1, 2026</span>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          {/* Table of Contents */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-28 self-start hidden lg:block">
            <FadeIn>
              <div className="space-y-2">
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-4">Contents</p>
                {sections.map((s, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx}`}
                    className="block text-xs text-zinc-500 hover:text-white transition-colors py-1 border-l border-zinc-800 pl-3 hover:border-brand-primary"
                  >
                    {s.title.split(". ").slice(1).join(". ")}
                  </a>
                ))}
              </div>
            </FadeIn>
          </aside>

          {/* Body */}
          <div className="w-full lg:w-3/4 space-y-16">
            <FadeIn>
              <p className="text-zinc-400 leading-relaxed text-lg">
                At Zenn Studios ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read this policy carefully.
              </p>
            </FadeIn>

            {sections.map((s, idx) => (
              <FadeIn key={idx} delay={0.05}>
                <div id={`section-${idx}`} className="scroll-mt-32">
                  <h2 className="text-xl font-bold mb-4 text-white">{s.title}</h2>
                  <p className="text-zinc-400 leading-relaxed whitespace-pre-line">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950 border-t border-zinc-900 text-center">
        <FadeIn>
          <p className="text-zinc-500 mb-4">Have questions about your data?</p>
          <Link href="/contact" className="text-brand-primary hover:text-white font-semibold transition-colors border-b border-brand-primary/30 hover:border-white pb-1">
            Contact our Privacy Team
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
