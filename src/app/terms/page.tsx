import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing and using the Zenn Studios website (the "Site") and engaging our services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our Site or services.`,
  },
  {
    title: "2. Description of Services",
    body: `Zenn Studios provides creative agency services including, but not limited to: custom web development and software engineering, brand identity and design systems, photography and commercial videography, social media management, and digital strategy consulting. The specific scope of services for any engagement will be outlined in a separate Scope of Work (SOW) or Service Agreement signed by both parties.`,
  },
  {
    title: "3. Intellectual Property",
    body: `Upon full and final payment for services rendered:

• All custom deliverables (code, designs, video, photography) created for your specific project are transferred to the client.
• Zenn Studios retains the right to use finalized deliverables in its portfolio, case studies, and promotional materials, unless a specific non-disclosure agreement is executed.
• All pre-existing tools, frameworks, libraries, and proprietary workflows developed by Zenn Studios remain the exclusive intellectual property of Zenn Studios.
• Third-party assets (stock photography, licensed fonts, software) are subject to their respective license agreements.`,
  },
  {
    title: "4. Payment Terms",
    body: `All project fees are outlined in the relevant Scope of Work. Unless otherwise agreed in writing:

• A non-refundable deposit of 50% is due before project commencement.
• The remaining balance is due upon project delivery and before the final deployment to any production environment.
• Invoices unpaid after 30 days are subject to a 1.5% monthly late fee.
• Zenn Studios reserves the right to suspend or withhold delivery of work for any engagement with an outstanding balance exceeding 30 days past due.`,
  },
  {
    title: "5. Confidentiality",
    body: `Both parties agree to maintain the confidentiality of proprietary information, business strategies, and trade secrets shared during the course of an engagement. This obligation survives the termination of any service agreement. If a formal Non-Disclosure Agreement (NDA) is required, it must be executed as a separate legal instrument.`,
  },
  {
    title: "6. Limitation of Liability",
    body: `Zenn Studios' total liability for any claims arising under or related to these Terms of Service or any service agreement shall not exceed the total fees paid by the client for the specific engagement giving rise to the claim in the three (3) months preceding the claim. In no event shall Zenn Studios be liable for indirect, incidental, consequential, special, or punitive damages, including loss of profits or data.`,
  },
  {
    title: "7. Warranty Disclaimer",
    body: `The Site is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. Zenn Studios does not warrant that the Site will be uninterrupted or error-free. For specific service deliverables, any warranty terms will be defined in your project's Scope of Work.`,
  },
  {
    title: "8. Governing Law",
    body: `These Terms of Service shall be governed by and construed in accordance with the laws of the Province of British Columbia, Canada, and the applicable federal laws of Canada, without regard to conflict-of-law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Vancouver, British Columbia.`,
  },
  {
    title: "9. Modifications to Terms",
    body: `Zenn Studios reserves the right to update these Terms of Service at any time. We will indicate the last revision date at the top of the page. Continued use of the Site after any modifications constitutes your acceptance of the new terms. We encourage you to review these Terms periodically.`,
  },
  {
    title: "10. Contact Information",
    body: `For questions regarding these Terms of Service, please contact:

Zenn Studios Legal Team
123 Innovation Drive, Vancouver, BC V6B 1A1, Canada  
Email: legal@zennstudios.com`,
  },
];

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <section className="pt-40 pb-20 border-b border-zinc-900 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">Terms of Service</h1>
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
                These Terms of Service ("Terms") govern your use of the Zenn Studios website and all associated services provided by Zenn Studios Inc. ("Zenn Studios", "we", "our", or "us"). Please read these Terms carefully before engaging our services.
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
          <p className="text-zinc-500 mb-4">Questions about our terms?</p>
          <Link href="/contact" className="text-brand-primary hover:text-white font-semibold transition-colors border-b border-brand-primary/30 hover:border-white pb-1">
            Contact our Legal Team
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
