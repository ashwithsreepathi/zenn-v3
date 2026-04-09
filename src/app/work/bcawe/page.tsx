import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function BCAWE() {
  return (
    <CaseStudyLayout
      title="BC AWE"
      tagline="A governance and resource hub for the Aboriginal Women's Entrepreneurs program in British Columbia."
      tag="Web Platform"
      year="2024"
      services={["Accessibility-First Web Architecture", "Content Management System", "Multi-User Governance Portal", "SEO Infrastructure", "WCAG 2.1 Compliance"]}
      challenge="BCAWE required a digital hub that could serve a diverse, often remote user base—including program administrators, government liaisons, and community members—with a platform that was both accessible (WCAG 2.1 AA compliant) and easy to update without technical knowledge."
      solution="We built a robust, CMS-powered Next.js platform featuring a custom headless content layer, multi-tier user roles for program administrators, and WCAG 2.1 AA compliant design patterns throughout. The architecture prioritized load performance on low-bandwidth connections, critical for remote communities."
      result="The platform successfully launched as the primary digital resource for the program, significantly reducing administrative overhead through its self-service CMS. It achieved full WCAG 2.1 AA certification, ensuring accessibility for all community members regardless of ability or connectivity."
      metrics={[
        { label: "WCAG Compliance Level", value: "AA" },
        { label: "Reduction in Admin Overhead", value: "35%" },
        { label: "Page Load (3G)", value: "<2s" },
      ]}
      externalUrl="https://bcawe.org"
      prevProject={{ slug: "rvproperties", title: "RV Properties" }}
      nextProject={{ slug: "mkfoodco", title: "MK Food Company" }}
    />
  );
}
