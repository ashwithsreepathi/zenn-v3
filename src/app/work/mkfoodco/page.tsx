import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function MKFoodCo() {
  return (
    <CaseStudyLayout
      title="MK Food Company"
      tagline="Custom wholesale inventory and distribution logistics platform for a high-volume food distributor."
      tag="ERP / Logistics"
      year="2024"
      services={["Custom ERP Development", "Inventory Management Module", "Wholesale Order Portal", "Logistics Workflow Automation", "Real-Time Reporting"]}
      challenge="MK Food Company was managing a high-volume wholesale distribution operation across multiple product categories using a patchwork of spreadsheets, phone calls, and disconnected software. This created significant operational bottlenecks, frequent stock discrepancies, and an inability to scale their wholesale volume."
      solution="We engineered a bespoke ERP system tailored specifically to food distribution logistics: a real-time inventory management module, a wholesale client order portal with tiered pricing logic, an automated dispatch and fulfillment tracking system, and a live reporting dashboard for executive-level oversight."
      result="The system transformed MK Food Company's operations within 90 days of deployment. Stock accuracy reached 99.2%, and the wholesale team was able to onboard 12 new wholesale accounts in a single quarter—a feat previously impossible with their manual processes."
      metrics={[
        { label: "Stock Accuracy", value: "99.2%" },
        { label: "New Wholesale Accounts (Q1)", value: "12" },
        { label: "Reduction in Manual Data Entry", value: "80%" },
      ]}
      prevProject={{ slug: "bcawe", title: "BC AWE" }}
      nextProject={{ slug: "blackfridaybins", title: "Black Friday Bins" }}
    />
  );
}
